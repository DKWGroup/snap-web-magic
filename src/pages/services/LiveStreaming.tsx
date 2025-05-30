import { motion } from 'framer-motion';
import { MonitorPlay, Wifi, Camera, Users, Settings, Zap } from 'lucide-react';
import CTA from '@/components/CTA';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const LiveStreaming = () => {
  const capabilities = [
    {
      icon: <MonitorPlay className="w-8 h-8" />,
      title: 'Transmisje na żywo',
      description: 'Profesjonalne live streamy z wielokamerowym setup i switchingiem na żywo.'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Mobilne studio',
      description: 'Kompletne studio realizacyjne, które dotrzemy do każdego miejsca.'
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Stabilne połączenie',
      description: 'Redundantne połączenia internetowe zapewniające ciągłość transmisji.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Interakcja z widzami',
      description: 'Moderacja czatu, Q&A sessions i integracja z platformami społecznościowymi.'
    }
  ];

  const equipment = [
    'Kamery 4K z optyczną stabilizacją',
    'Mikser wideo ATEM',
    'Bezprzewodowe mikrofony',
    'Profesjonalne oświetlenie LED',
    'Enkodery streamingowe',
    'Redundantne połączenia internetowe',
    'System monitorowania',
    'Mobilne studio w walizce'
  ];

  const faqs = [
    {
      id: 'faq-1',
      question: 'Jakie są koszty realizacji transmisji na żywo?',
      answer: 'Cena transmisji zależy od czasu trwania, liczby kamer, złożoności realizacji i lokalizacji. Podstawowe transmisje jednokamerowe zaczynają się od 2000 zł, podczas że wielokamerowe produkcje z mobilnym studiem mogą kosztować od 5000-15000 zł. Cena obejmuje obsługę techniczną i sprzęt.'
    },
    {
      id: 'faq-2',
      question: 'Jak daleko możecie dojechać z mobilnym studiem?',
      answer: 'Obsługujemy wydarzenia w całej Polsce. Mobilne studio jest transportowane busem wyposażonym w cały niezbędny sprzęt. Dla wydarzeń poza granicami kraju również możemy zorganizować realizację - skontaktuj się z nami w celu ustalenia szczegółów logistycznych.'
    },
    {
      id: 'faq-3',
      question: 'Czy gwarantujecie stabilność transmisji?',
      answer: 'Tak! Używamy redundantnych połączeń internetowych (główne + backup) oraz profesjonalnych enkoderów streamingowych. Monitorujemy jakość transmisji w czasie rzeczywistym i mamy procedury na wypadek problemów technicznych. Oferujemy 99,5% uptime dla naszych transmisji.'
    },
    {
      id: 'faq-4',
      question: 'Na jakie platformy możecie prowadzić transmisje?',
      answer: 'Transmitujemy na wszystkie popularne platformy: YouTube Live, Facebook Live, LinkedIn Live, Twitch, Vimeo, oraz platformy korporacyjne jak Microsoft Teams, Zoom czy dedykowane portale eventowe. Możemy prowadzić jednoczesną transmisję na kilka platform (multistreaming).'
    },
    {
      id: 'faq-5',
      question: 'Czy oferujecie nagranie wydarzenia oprócz transmisji?',
      answer: 'Oczywiście! Standardowo nagrywamy każdą transmisję w pełnej jakości jako backup. Możemy również przygotować materiał do późniejszej publikacji, z montażem highlights, dodaniem grafik czy podziałem na segmenty. Nagranie dostarczamy w ciągu 2-3 dni roboczych.'
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
              Realizacja <span className="text-orange">na żywo</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Obsługujemy live streamy z konferencji, wydarzeń czy szkoleń. 
              Dostarczamy mobilne studio realizacyjne gotowe do pracy w terenie i zdalnie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
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
              Nasze <span className="text-orange">możliwości</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Profesjonalny sprzęt i doświadczony zespół gwarantują najwyższą jakość transmisji.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-darkCard p-6 rounded-lg"
              >
                <div className="text-orange mb-4">{capability.icon}</div>
                <h3 className="text-white text-xl font-bold mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
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
                Profesjonalny <span className="text-orange">sprzęt</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Dysponujemy kompletnym mobilnym studiem realizacyjnym, które pozwala 
                na przeprowadzenie transmisji na najwyższym poziomie w każdym miejscu.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {equipment.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <Settings className="text-orange w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="bg-darkCard p-8 rounded-lg text-center">
                <Zap className="text-orange w-20 h-20 mx-auto mb-6" />
                <h3 className="text-white text-2xl font-bold mb-4">Mobilne studio</h3>
                <p className="text-gray-300 mb-6">
                  Kompletne studio realizacyjne w mobilnej wersji. Gotowe do pracy 
                  w każdym miejscu i warunkach.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-darkBg/50 p-4 rounded-lg">
                    <p className="text-orange font-semibold text-lg">4K</p>
                    <p className="text-gray-400 text-sm">Jakość transmisji</p>
                  </div>
                  <div className="bg-darkBg/50 p-4 rounded-lg">
                    <p className="text-orange font-semibold text-lg">Multi-cam</p>
                    <p className="text-gray-400 text-sm">Kilka kamer równocześnie</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              Zastosowania <span className="text-orange">transmisji</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-darkCard p-6 rounded-lg text-center"
            >
              <Users className="text-orange w-12 h-12 mx-auto mb-4" />
              <h3 className="text-white text-lg font-bold mb-3">Konferencje</h3>
              <p className="text-gray-300 text-sm">
                Transmisje konferencji biznesowych, seminariów i wydarzeń branżowych.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-darkCard p-6 rounded-lg text-center"
            >
              <MonitorPlay className="text-orange w-12 h-12 mx-auto mb-4" />
              <h3 className="text-white text-lg font-bold mb-3">Szkolenia</h3>
              <p className="text-gray-300 text-sm">
                Webinary, kursy online i sesje szkoleniowe dla szerokiej publiczności.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-darkCard p-6 rounded-lg text-center"
            >
              <Camera className="text-orange w-12 h-12 mx-auto mb-4" />
              <h3 className="text-white text-lg font-bold mb-3">Wydarzenia</h3>
              <p className="text-gray-300 text-sm">
                Relacje na żywo z eventów, premier produktów i spotkań firmowych.
              </p>
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
              Odpowiedzi na najważniejsze pytania dotyczące realizacji na żywo.
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

export default LiveStreaming;
