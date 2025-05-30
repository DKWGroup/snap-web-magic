import { motion } from 'framer-motion';
import { Mic, Radio, Upload, Headphones, Settings, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '@/components/CTA';
import { Button } from '@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const Podcasts = () => {
  const services = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: 'Nagranie w studiu',
      description: 'Profesjonalne studio z najwyższej klasy sprzętem audio i wygłuszeniem akustycznym.'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Montaż i post-produkcja',
      description: 'Profesjonalna obróbka dźwięku, usuwanie szumów, dodawanie muzyki i efektów.'
    },
    {
      icon: <Upload className="w-8 h-8" />,
      title: 'Publikacja i dystrybucja',
      description: 'Publikujemy podcast na wszystkich głównych platformach i w mediach społecznościowych.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Wsparcie strategiczne',
      description: 'Pomoc w planowaniu treści, formatowaniu odcinków i budowaniu audytorium.'
    }
  ];

  const features = [
    'Nagranie w profesjonalnym studiu',
    'Montaż i mastering audio',
    'Tworzenie intro i outro',
    'Grafika dla odcinków',
    'Publikacja na platformach podcast',
    'Promocja w social media',
    'Analityka i raportowanie',
    'Konsultacje strategiczne'
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Podcast Grzegorz Kusz - Agent Specjalny',
      client: 'Grzegorz Kusz',
      description: 'Kompleksowa obsługa podcastu od nagrania po publikację, budowanie zaangażowanej społeczności przez 5 lat współpracy.',
      image: '/images/project-3.jpg',
      caseStudyId: '3'
    },
    {
      id: 2,
      title: 'Podcast Biznesowy TechTalks',
      client: 'TechSolutions',
      description: 'Seria wywiadów z ekspertami branży technologicznej, nagrywana w naszym profesjonalnym studiu.',
      image: '/images/portfolio-4.jpg',
      caseStudyId: '7'
    }
  ];

  const benefits = [
    'Budowanie autorytetu w branży poprzez wartościowe treści audio',
    'Dotarcie do nowej grupy odbiorców preferujących format audio',
    'Większe zaangażowanie słuchaczy dzięki długiej formie treści',
    'Możliwość repurposingu treści na różne formaty mediów',
    'Budowanie społeczności wokół marki'
  ];

  const faqs = [
    {
      id: 'faq-1',
      question: 'Ile kosztuje nagranie podcastu w studiu?',
      answer: 'Cena nagrania podcastu zależy od długości sesji i dodatkowych usług. Podstawowa sesja nagraniowa (do 2 godzin) kosztuje od 500 zł. W cenę wliczony jest montaż podstawowy, mastering i przygotowanie plików do publikacji. Pakiety dla regularnych nagrań oferują atrakcyjniejsze ceny.'
    },
    {
      id: 'faq-2',
      question: 'Jak długo trwa proces produkcji odcinka podcastu?',
      answer: 'Standardowy proces obejmuje nagranie (1-3 godziny), montaż i post-produkcję (2-3 dni robocze). Jeśli potrzebujecie dodatkowych elementów jak intro, outro czy grafiki, proces może potrwać do tygodnia. Oferujemy również ekspresową realizację w 24 godziny za dodatkową opłatą.'
    },
    {
      id: 'faq-3',
      question: 'Czy pomagacie w dystrybucji podcastu?',
      answer: 'Tak! Pomagamy w publikacji podcastu na głównych platformach takich jak Spotify, Apple Podcasts, Google Podcasts i YouTube. Zajmujemy się również tworzeniem grafik odcinków, opisów i promocją w mediach społecznościowych w ramach pakietów obsługi.'
    },
    {
      id: 'faq-4',
      question: 'Czy można nagrywać podcast zdalnie?',
      answer: 'Oczywiście! Oferujemy możliwość nagrywania wywiadów z gośćmi zdalnie przy użyciu profesjonalnych platform. Zapewniamy wysoką jakość audio i możliwość nagrywania wideo. Możemy również połączyć nagranie zdalne z obecnością gospodarza w studiu.'
    },
    {
      id: 'faq-5',
      question: 'Jakie usługi dodatkowe oferujecie dla podcastów?',
      answer: 'Oprócz nagrania i montażu oferujemy: tworzenie intro i outro, kompozycję muzyki tematycznej, transkrypcję odcinków, tworzenie grafik promocyjnych, zarządzanie kanałami w social media, analitykę słuchalności oraz konsultacje strategiczne dotyczące rozwoju podcastu.'
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
              <span className="text-orange">Podcasty</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Pełne wsparcie w tworzeniu podcastów – od nagrania w naszym profesjonalnym studiu, 
              przez montaż, po publikację na mediach społecznościowych.
            </p>
            <Button asChild size="lg" className="bg-orange hover:bg-orange-dark">
              <Link to="/contact">Zamów bezpłatną konsultację</Link>
            </Button>
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
              Kompleksowa <span className="text-orange">obsługa</span> podcastów
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Od koncepcji po publikację - zajmiemy się wszystkim, abyś mógł skupić się na treści.
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
              Przykładowe <span className="text-orange">realizacje</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Zobacz podcasty, które pomogliśmy stworzyć naszym klientom.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Studio Section */}
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
                Nasze <span className="text-orange">studio</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Dysponujemy profesjonalnym studiem nagraniowym wyposażonym w najnowocześniejszy 
                sprzęt audio. Studio jest w pełni wygłuszone akustycznie, co gwarantuje 
                krystalicznie czystą jakość nagrań.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center text-sm"
                  >
                    <Radio className="text-orange w-4 h-4 mr-2 flex-shrink-0" />
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
              <div className="bg-darkCard p-8 rounded-lg text-center">
                <Headphones className="text-orange w-20 h-20 mx-auto mb-6" />
                <h3 className="text-white text-2xl font-bold mb-4">Profesjonalny sprzęt</h3>
                <p className="text-gray-300 mb-6">
                  Mikrofony kondensatorowe, interfejsy audio, monitory studyjne 
                  i oprogramowanie na najwyższym poziomie.
                </p>
                <div className="bg-darkBg/50 p-4 rounded-lg">
                  <p className="text-orange font-semibold">Jakość studyjna</p>
                  <p className="text-gray-400 text-sm mt-1">Nagrania w rozdzielczości 24-bit/48kHz</p>
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
              Podcasty to potężne narzędzie marketingowe, które może znacząco wpłynąć na rozwój Twojej firmy.
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
              Odpowiedzi na najważniejsze pytania dotyczące produkcji podcastów.
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

export default Podcasts;
