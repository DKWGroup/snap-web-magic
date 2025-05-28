
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Kontakt – DKW Group | Skontaktuj się z nami</title>
        <meta 
          name="description" 
          content="Skontaktuj się z DKW Group! Omówmy Twój projekt wideo, kampanię social media lub strategię marketingową. Zadzwoń lub napisz – odpowiemy w 24h!"
        />
      </Helmet>
      <main className="bg-darkBg min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-darkBg">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Zacznijmy <span className="text-orange">działać!</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Skontaktuj się z nami, aby omówić Twój projekt lub zadać pytanie o nasze usługi.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Details + Form */}
        <section className="py-20 bg-darkBg">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                  Informacje <span className="text-orange">kontaktowe</span>
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-orange/20 p-3 rounded-full mr-4">
                      <Mail className="w-6 h-6 text-orange" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Email</h3>
                      <a href="mailto:contact.dkwgroup@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                        contact.dkwgroup@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange/20 p-3 rounded-full mr-4">
                      <Phone className="w-6 h-6 text-orange" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Telefon</h3>
                      <div className="space-y-1">
                        <div className="flex items-baseline">
                          <span className="text-gray-400 w-16 text-sm">Dawid:</span>
                          <a href="tel:+48517957875" className="text-gray-300 hover:text-white transition-colors">
                            +48 517 957 875
                          </a>
                        </div>
                        <div className="flex items-baseline">
                          <span className="text-gray-400 w-16 text-sm">Kamil:</span>
                          <a href="tel:+48881046689" className="text-gray-300 hover:text-white transition-colors">
                            +48 881 046 689
                          </a>
                        </div>
                        <div className="flex items-baseline">
                          <span className="text-gray-400 w-16 text-sm">Wiktoria:</span>
                          <a href="tel:+48537168645" className="text-gray-300 hover:text-white transition-colors">
                            +48 537 168 645
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange/20 p-3 rounded-full mr-4">
                      <MapPin className="w-6 h-6 text-orange" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Lokalizacja</h3>
                      <p className="text-gray-300">
                        Katowice, Polska
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-white font-semibold text-xl mb-4">Godziny pracy</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-gray-300">
                      <span>Poniedziałek - Piątek:</span>
                      <span>9:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Sobota:</span>
                      <span>10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Niedziela:</span>
                      <span>Zamknięte</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-darkCard rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Napisz do nas
                  </h2>
                  <ContactForm />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section (Optional) */}
        <section className="py-12 bg-darkBg">
          <div className="container">
            <div className="aspect-[21/9] w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.073073964839!2d19.01722231571613!3d50.2592229794496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce3e2e2e2e2e%3A0x123456789abcdef!2sZygmunta%20Krasi%C5%84skiego%2029%2C%2040-019%20Katowice!5e0!3m2!1spl!2spl!4v1717000000000!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="DKW Group location"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
