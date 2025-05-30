import { motion } from 'framer-motion';
import { MessageSquare, TrendingUp, Users, Calendar, BarChart, Heart } from 'lucide-react';
import CTA from '@/components/CTA';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const SocialMedia = () => {
  const services = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Strategia i planowanie',
      description: 'Opracowujemy strategię komunikacji i kalendarz publikacji dostosowany do Twojej marki.'
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Tworzenie treści',
      description: 'Grafiki, posty, stories, reels i inne materiały dopasowane do każdej platformy.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community management',
      description: 'Moderacja komentarzy, odpowiadanie na wiadomości i budowanie społeczności.'
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Analityka i raporty',
      description: 'Szczegółowe analizy efektywności i regularne raporty z działań.'
    }
  ];

  const platforms = [
    { name: 'Facebook', description: 'Budowanie społeczności i reklamy targetowane' },
    { name: 'Instagram', description: 'Wizualne storytelling i influencer marketing' },
    { name: 'LinkedIn', description: 'Komunikacja B2B i personal branding' },
    { name: 'TikTok', description: 'Viralowe treści dla młodszej publiczności' },
    { name: 'YouTube', description: 'Długoformatowe treści wideo i vlogi' },
    { name: 'Twitter/X', description: 'Komunikacja w czasie rzeczywistym' }
  ];

  const faqs = [
    {
      id: 'faq-1',
      question: 'Jakie platformy social media obsługujecie?',
      answer: 'Obsługujemy wszystkie główne platformy: Facebook, Instagram, LinkedIn, TikTok, YouTube, Twitter/X, Pinterest i Snapchat. Dostosowujemy strategię i treści do specyfiki każdej platformy oraz Twojej grupy docelowej. Możemy także zarządzać nowymi platformami społecznościowymi w miarę ich rozwoju.'
    },
    {
      id: 'faq-2',
      question: 'Ile postów publikujecie miesięcznie?',
      answer: 'Liczba postów zależy od wybranego pakietu i platformy. Pakiet podstawowy: 2-3 posty/tydzień na platformę, pakiet standardowy: 4-5 postów/tydzień, pakiet premium: codzienne publikacje + stories. Zawsze dostosowujemy częstotliwość do algorytmów platform i zaangażowania odbiorców.'
    },
    {
      id: 'faq-3',
      question: 'Czy odpowiadacie na komentarze i wiadomości prywatne?',
      answer: 'Tak! Community management to kluczowy element naszych usług. Odpowiadamy na komentarze w ciągu 2-4 godzin w dni robocze, moderujemy dyskusje, zarządzamy wiadomościami prywatnymi i budujemy relacje z obserwującymi. Dla każdego klienta przygotowujemy wytyczne komunikacyjne.'
    },
    {
      id: 'faq-4',
      question: 'Jak często otrzymuję raporty z działań w social media?',
      answer: 'Przygotowujemy miesięczne raporty zawierające: analizę zasięgów i zaangażowania, wzrost liczby obserwujących, najlepiej działające treści, analizę konkurencji i rekomendacje na kolejny miesiąc. Dodatkowo prowadzą cotygodniowe monitoring i na bieżąco informujemy o istotnych wydarzeniach.'
    },
    {
      id: 'faq-5',
      question: 'Czy tworzycie treści wideo dla social media?',
      answer: 'Oczywiście! Tworzymy różnorodne treści wideo: krótkometrażowe filmy promocyjne, reels na Instagram i TikTok, animacje, stories, live streams i materiały edukacyjne. Dysponujemy profesjonalnym sprzętem i zespołem realizatorów, którzy specializują się w content na social media.'
    }
  ];

  return (
    <main className="bg-darkBg min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-orange">Social Media</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Kompleksowa obsługa kanałów społecznościowych, od strategii komunikacji, 
              przez tworzenie treści, po analizę efektywności i optymalizację działań.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Kompleksowa <span className="text-orange">obsługa</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Od strategii po realizację - zajmiemy się wszystkimi aspektami Twojej obecności w social media.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-darkCard p-6 rounded-lg"
              >
                <div className="text-orange mb-4">{service.icon}</div>
                <h3 className="text-white text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              <span className="text-orange">Platformy</span> społecznościowe
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Dostosowujemy strategię do specyfiki każdej platformy i Twojej grupy docelowej.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-darkCard p-6 rounded-lg text-center"
              >
                <h3 className="text-orange text-lg font-bold mb-2">{platform.name}</h3>
                <p className="text-gray-300 text-sm">{platform.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Mierzalne <span className="text-orange">rezultaty</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Nasze działania w social media są zawsze ukierunkowane na konkretne cele biznesowe. 
                Monitorujemy kluczowe wskaźniki i optymalizujemy strategie dla maksymalnej efektywności.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <TrendingUp className="text-orange w-6 h-6 mr-3" />
                  <span className="text-gray-300">Wzrost zasięgu i zaangażowania</span>
                </div>
                <div className="flex items-center">
                  <Users className="text-orange w-6 h-6 mr-3" />
                  <span className="text-gray-300">Budowanie lojalnej społeczności</span>
                </div>
                <div className="flex items-center">
                  <Heart className="text-orange w-6 h-6 mr-3" />
                  <span className="text-gray-300">Zwiększenie świadomości marki</span>
                </div>
                <div className="flex items-center">
                  <BarChart className="text-orange w-6 h-6 mr-3" />
                  <span className="text-gray-300">Generowanie leadów i sprzedaży</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="bg-darkCard p-8 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-6 text-center">Przykładowe rezultaty</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-orange text-3xl font-bold mb-2">+150%</div>
                    <div className="text-gray-300 text-sm">Wzrost zasięgu</div>
                  </div>
                  <div className="text-center">
                    <div className="text-orange text-3xl font-bold mb-2">+200%</div>
                    <div className="text-gray-300 text-sm">Zaangażowanie</div>
                  </div>
                  <div className="text-center">
                    <div className="text-orange text-3xl font-bold mb-2">+300%</div>
                    <div className="text-gray-300 text-sm">Nowi followersi</div>
                  </div>
                  <div className="text-center">
                    <div className="text-orange text-3xl font-bold mb-2">+80%</div>
                    <div className="text-gray-300 text-sm">Leady z social media</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Najczęściej zadawane <span className="text-orange">pytania</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Odpowiedzi na najważniejsze pytania dotyczące obsługi social media.
            </p>
          </motion.div>

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
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default SocialMedia;
