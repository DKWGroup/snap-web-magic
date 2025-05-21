
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const FAQSection = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const faqs = [
    {
      id: 'faq-1',
      question: 'Jakie usługi oferuje DKW Group?',
      answer: 'DKW Group oferuje profesjonalne usługi produkcji wideo, marketingu internetowego oraz tworzenia angażujących treści dla marek. Nasze usługi obejmują produkcję filmów reklamowych, obsługę kanałów social media, tworzenie strategii marketingowych i wiele innych.'
    },
    {
      id: 'faq-2',
      question: 'Jak przebiega proces współpracy z DKW Group?',
      answer: 'Proces współpracy zaczyna się od konsultacji, podczas której poznajemy Twoje potrzeby i cele biznesowe. Następnie przygotowujemy indywidualną ofertę, opracowujemy strategię działania i po jej zaakceptowaniu przechodzimy do realizacji projektu. Na każdym etapie informujemy o postępach i pozostajemy w stałym kontakcie.'
    },
    {
      id: 'faq-3',
      question: 'Ile kosztują usługi DKW Group?',
      answer: 'Ceny naszych usług są ustalane indywidualnie w zależności od zakresu projektu, czasu realizacji i wymaganych zasobów. Zapraszamy do kontaktu, aby omówić szczegóły Twojego projektu i przygotować spersonalizowaną wycenę.'
    },
    {
      id: 'faq-4',
      question: 'Jak długo trwa realizacja projektu?',
      answer: 'Czas realizacji projektu zależy od jego złożoności i zakresu. Proste projekty mogą być zrealizowane w ciągu kilku dni, podczas gdy bardziej złożone przedsięwzięcia mogą trwać kilka tygodni lub miesięcy. Zawsze staramy się dostosować do Twoich terminów i potrzeb.'
    },
    {
      id: 'faq-5',
      question: 'Czy DKW Group obsługuje klientów z całej Polski?',
      answer: 'Tak, obsługujemy klientów z całej Polski, a także realizujemy projekty międzynarodowe. Niezależnie od lokalizacji, zapewniamy profesjonalną obsługę i wysoką jakość usług.'
    }
  ];

  return (
    <section className="py-20 bg-darkBg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            Najczęściej zadawane <span className="text-orange">pytania</span>
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Poniżej znajdziesz odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług i współpracy. Jeśli nie znajdziesz odpowiedzi na swoje pytanie, skontaktuj się z nami!
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq) => (
                <AccordionItem 
                  key={faq.id} 
                  value={faq.id}
                  className="bg-darkCard rounded-lg overflow-hidden border-none"
                >
                  <AccordionTrigger className="px-6 py-4 text-white hover:no-underline">
                    <span className="text-left font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
