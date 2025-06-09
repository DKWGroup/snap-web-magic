
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactEmailRequest = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Wszystkie pola są wymagane" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const gmailEmail = Deno.env.get("GMAIL_EMAIL");
    const gmailPassword = Deno.env.get("GMAIL_APP_PASSWORD");

    if (!gmailEmail || !gmailPassword) {
      console.error("Gmail credentials not configured");
      return new Response(
        JSON.stringify({ error: "Konfiguracja serwera email nie jest kompletna" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Create email content
    const emailContent = `
From: ${name}
Email: ${email}

Wiadomość:
${message}

---
Wiadomość wysłana z formularza kontaktowego DKW Group
    `.trim();

    // Send email using Gmail SMTP
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: "gmail",
        template_id: "template_contact",
        user_id: "user_gmail",
        template_params: {
          to_email: "contact.dkwgroup@gmail.com",
          from_name: name,
          from_email: email,
          message: emailContent,
          reply_to: email,
        },
        accessToken: gmailPassword,
      }),
    });

    // Alternative: Use direct SMTP via nodemailer-like approach
    // Since Deno doesn't have nodemailer, we'll use a different approach
    const smtpResponse = await sendEmailViaSMTP({
      to: "contact.dkwgroup@gmail.com",
      subject: `Nowa wiadomość od ${name} - DKW Group`,
      text: emailContent,
      from: gmailEmail,
      password: gmailPassword,
    });

    console.log("Email sent successfully via SMTP");

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Wiadomość została wysłana pomyślnie" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ 
        error: "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później." 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

async function sendEmailViaSMTP(params: {
  to: string;
  subject: string;
  text: string;
  from: string;
  password: string;
}) {
  // Create SMTP connection to Gmail
  const command = `
echo "${params.text}" | curl -s \\
  --url "smtps://smtp.gmail.com:465" \\
  --ssl-reqd \\
  --mail-from "${params.from}" \\
  --mail-rcpt "${params.to}" \\
  --user "${params.from}:${params.password}" \\
  --upload-file - \\
  --header "Subject: ${params.subject}" \\
  --header "From: ${params.from}" \\
  --header "To: ${params.to}"
  `;

  try {
    // For Deno environment, we'll use a different approach
    // Create the email content in RFC 2822 format
    const emailData = [
      `From: ${params.from}`,
      `To: ${params.to}`,
      `Subject: ${params.subject}`,
      `Content-Type: text/plain; charset=utf-8`,
      ``,
      params.text
    ].join('\r\n');

    // Use TLS connection to Gmail SMTP
    const conn = await Deno.connectTls({
      hostname: "smtp.gmail.com",
      port: 465,
    });

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    // SMTP conversation
    await writeAndRead(conn, "", decoder); // Read initial greeting
    await writeAndRead(conn, `EHLO localhost\r\n`, decoder);
    await writeAndRead(conn, `AUTH LOGIN\r\n`, decoder);
    await writeAndRead(conn, btoa(params.from) + `\r\n`, decoder);
    await writeAndRead(conn, btoa(params.password) + `\r\n`, decoder);
    await writeAndRead(conn, `MAIL FROM:<${params.from}>\r\n`, decoder);
    await writeAndRead(conn, `RCPT TO:<${params.to}>\r\n`, decoder);
    await writeAndRead(conn, `DATA\r\n`, decoder);
    await writeAndRead(conn, emailData + `\r\n.\r\n`, decoder);
    await writeAndRead(conn, `QUIT\r\n`, decoder);

    conn.close();
    return { success: true };
  } catch (error) {
    console.error("SMTP Error:", error);
    throw error;
  }
}

async function writeAndRead(conn: Deno.TlsConn, command: string, decoder: TextDecoder) {
  if (command) {
    const encoder = new TextEncoder();
    await conn.write(encoder.encode(command));
  }
  
  const buffer = new Uint8Array(1024);
  const bytesRead = await conn.read(buffer);
  if (bytesRead) {
    const response = decoder.decode(buffer.subarray(0, bytesRead));
    console.log("SMTP Response:", response.trim());
    return response;
  }
  return "";
}

serve(handler);
