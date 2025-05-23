import { motion } from 'framer-motion';
import { Camera, PlayCircle, FileVideo, Edit, Zap, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '@/components/CTA';
import { Button } from '@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const VideoProduction = () => {
  const processSteps = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Konsultacja i brief',
      description: 'Poznajemy Twoje potrzeby i cele biznesowe, aby stworzyć idealne rozwiązanie.'
    },
    {
      icon: <FileVideo className="w-8 h-8" />,
      title: 'Scenariusz i storyboard',
      description: 'Opracowujemy scenariusz i wizualizujemy koncepcję przed rozpoczęciem zdjęć.'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Profesjonalne nagrania',
      description: 'Wykorzystujemy najnowszy sprzęt do nagrywania materiałów w najwyższej jakości.'
    },
    {
      icon: <Edit className="w-8 h-8" />,
      title: 'Post-produkcja',
      description: 'Montaż, korekcja kolorów, dźwięk i grafika - dopracowujemy każdy detal.'
    }
  ];

  const features = [
    'Filmy promocyjne i reklamowe',
    'Materiały szkoleniowe i instruktażowe',
    'Filmy korporacyjne',
    'Relacje z wydarzeń',
    'Testimoniale klientów',
    'Animacje 3D i motion graphics'
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Spot Reklamowy dla Investment Partners',
      client: 'Investment Partners',
      description: 'Film reklamowy promujący usługi finansowe, który wygenerował 30,000+ wyświetleń i setki rejestracji na szkolenia.',
      image: '/images/project-2.jpg',
      caseStudyId: '2'
    },
    {
      id: 2,
      title: 'Obsługa Kanału Kokpit Kamila',
      client: 'Kokpit Kamila',
      description: 'Seria profesjonalnych nagrań edukacyjnych o tematyce lotniczej, które zgromadziły ponad 3 miliony wyświetleń.',
      image: '/images/project-1.jpg',
      caseStudyId: '1'
    }
  ];

  const benefits = [
    'Zwiększenie świadomości marki i zaangażowania odbiorców',
    'Profesjonalny wizerunek firmy budujący zaufanie klientów',
    'Wyższe konwersje i wzrost sprzedaży dzięki wartościowym treściom',
    'Efektywna komunikacja wartości i korzyści produktów/usług',
    'Budowanie długotrwałych relacji z odbiorcami'
  ];

  const faqs = [
    {
      id: 'faq-1',
      question: 'Ile kosztuje produkcja filmu reklamowego?',
      answer: 'Cena produkcji filmu reklamowego zależy od złożoności projektu, długości filmu, liczby dni zdjęciowych i wymaganych efektów specjalnych. Podstawowe filmy promocyjne zaczynają się od kilku tysięcy złotych, podczas gdy bardziej zaawansowane produkcje mogą kosztować dziesiątki tysięcy. Skontaktuj się z nami, aby otrzymać spersonalizowaną wycenę.'
    },
    {
      id: 'faq-2',
      question: 'Jak długo trwa proces produkcji filmu?',
      answer: 'Typowy proces produkcji filmu trwa od 2 do 6 tygodni, w zależności od złożoności projektu. Obejmuje to czas na przygotowanie scenariusza (1 tydzień), zdjęcia (1-3 dni), oraz post-produkcję (1-3 tygodnie). Proste filmy mogą być gotowe w ciągu tygodnia, podczas gdy bardziej złożone projekty wymagają więcej czasu.'
    },
    {
      id: 'faq-3',
      question: 'Czy zapewniacie sprzęt do nagrań?',
      answer: 'Tak, dysponujemy profesjonalnym sprzętem do nagrań, w tym kamerami 4K, dronami, systemami oświetleniowymi i sprzętem audio. Nasz sprzęt jest regularnie aktualizowany, aby zapewnić najwyższą jakość nagrań zgodną z najnowszymi standardami branżowymi.'
    },
    {
      id: 'faq-4',
      question: 'Czy możemy uczestniczyć w procesie montażu?',
      answer: 'Oczywiście! Zachęcamy do współpracy na etapie post-produkcji. Przesyłamy wersje robocze do akceptacji i uwag, dzięki czemu finalny materiał w pełni odpowiada Waszym oczekiwaniom. Oferujemy do 3 rund poprawek w ramach standardowej usługi.'
    },
    {
      id: 'faq-5',
      question: 'W jakich formatach dostarczacie gotowe filmy?',
      answer: 'Dostarczamy filmy w różnych formatach dostosowanych do Waszych potrzeb: MP4 w jakości 4K, FullHD i HD dla różnych platform, wersje kwadratowe i pionowe dla social media, oraz formaty zoptymalizowane pod konkretne platformy jak YouTube, Facebook czy Instagram.'
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
              Produkcja <span className="text-orange">filmowa</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Tworzymy profesjonalne materiały wideo od koncepcji po gotowy produkt. 
              Każde nagranie jest dopracowane pod kątem jakości i detalu.
            </p>
            <Button asChild size="lg" className="bg-orange hover:bg-orange-dark">
              <Link to="/contact">Zamów bezpłatną konsultację</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Nasz <span className="text-orange">proces</span> pracy
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Od pierwszej konsultacji po finalne materiały - dbamy o każdy etap produkcji.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-darkCard p-6 rounded-lg text-center"
              >
                <div className="text-orange mb-4 flex justify-center">{step.icon}</div>
                <h3 className="text-white text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-darkBg/70">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nasze <span className="text-orange">portfolio</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Zobacz przykłady naszych produkcji i przekonaj się o jakości naszych usług.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-darkCard rounded-lg overflow-hidden flex flex-col h-full"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-orange text-sm mb-3">{item.client}</p>
                  <p className="text-gray-300 text-sm mb-6 flex-grow">{item.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/case-studies/${item.caseStudyId}`}>
                      Zobacz case study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="secondary">
              <Link to="/projects">Zobacz więcej projektów</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
                Co <span className="text-orange">oferujemy?</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Nasz zespół specjalizuje się w tworzeniu różnorodnych materiałów wideo, 
                dostosowanych do potrzeb każdego klienta.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <PlayCircle className="text-orange w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
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
              <div className="bg-darkCard p-8 rounded-lg">
                <div className="text-center">
                  <Zap className="text-orange w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-white text-xl font-bold mb-4">Najwyższa jakość</h3>
                  <p className="text-gray-300">
                    Wykorzystujemy profesjonalny sprzęt 4K, nowoczesne oprogramowanie 
                    i wieloletnie doświadczenie, aby zapewnić materiały na najwyższym poziomie.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-darkCard">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Korzyści dla <span className="text-orange">Twojego biznesu</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Profesjonalne materiały wideo mają realny wpływ na wyniki Twojej firmy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start p-4"
              >
                <CheckCircle className="text-orange w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <p className="text-white">{benefit}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Button asChild size="lg" className="bg-orange hover:bg-orange-dark">
              <Link to="/contact">Skontaktuj się z nami</Link>
            </Button>
          </motion.div>
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
              Odpowiedzi na najważniejsze pytania dotyczące produkcji filmowej.
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

export default VideoProduction;
