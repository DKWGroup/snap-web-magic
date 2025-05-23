
import { motion } from 'framer-motion';
import { Globe, Code, Search, Smartphone, ArrowRight, CheckCircle, Users, Layout, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '@/components/CTA';
import { Button } from '@/components/ui/button';

const WebDevelopment = () => {
  const processSteps = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Analiza potrzeb',
      description: 'Poznajemy Twój biznes, cele i grupę docelową, aby stworzyć idealną strategię.'
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'Projektowanie UX/UI',
      description: 'Tworzymy intuicyjny design skoncentrowany na doświadczeniu użytkownika.'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Rozwój strony',
      description: 'Kodujemy responsywną stronę z wykorzystaniem najnowszych technologii.'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Optymalizacja SEO',
      description: 'Implementujemy najlepsze praktyki SEO dla lepszej widoczności w Google.'
    }
  ];

  const features = [
    'Responsywne strony internetowe',
    'Sklepy internetowe (e-commerce)',
    'Optymalizacja SEO',
    'Szybkość ładowania stron',
    'Bezpieczeństwo i certyfikaty SSL',
    'Integracja z mediami społecznościowymi'
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Strona Korporacyjna TechSolutions',
      client: 'TechSolutions',
      description: 'Nowoczesna strona firmowa z zaawansowanymi funkcjonalnościami i optymalizacją SEO, która zwiększyła ruch organiczny o 300%.',
      image: '/images/portfolio-1.jpg',
      caseStudyId: '4'
    },
    {
      id: 2,
      title: 'Sklep Internetowy Fashion Store',
      client: 'Fashion Store',
      description: 'Kompleksowy sklep e-commerce z systemem płatności, zarządzaniem zamówieniami i zoptymalizowaną konwersją.',
      image: '/images/portfolio-2.jpg',
      caseStudyId: '5'
    },
    {
      id: 3,
      title: 'Portal Edukacyjny EduLearn',
      client: 'EduLearn',
      description: 'Platforma e-learningowa z systemem kursów online, płatnościami i zaawansowaną analityką użytkowników.',
      image: '/images/portfolio-3.jpg',
      caseStudyId: '6'
    }
  ];

  const benefits = [
    'Zwiększenie widoczności w wyszukiwarkach Google',
    'Profesjonalny wizerunek firmy budujący zaufanie klientów',
    'Wyższe konwersje dzięki zoptymalizowanemu UX',
    'Responsywność na wszystkich urządzeniach',
    'Szybkie ładowanie wpływające na pozycjonowanie'
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
              Strony internetowe i <span className="text-orange">SEO</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Tworzymy nowoczesne, responsywne strony internetowe zoptymalizowane pod kątem wyszukiwarek. 
              Twoja obecność online nigdy nie była bardziej profesjonalna.
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
              Nasz <span className="text-orange">proces</span> tworzenia
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Od analizy potrzeb po optymalizację SEO - każdy etap jest przemyślany.
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
              Nasze <span className="text-orange">realizacje</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Zobacz przykłady stron internetowych, które stworzyliśmy dla naszych klientów.
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
                Nasze usługi obejmują pełen zakres tworzenia stron internetowych i optymalizacji SEO.
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
                    <Globe className="text-orange w-5 h-5 mr-3 flex-shrink-0" />
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
                  <h3 className="text-white text-xl font-bold mb-4">Optymalizacja SEO</h3>
                  <p className="text-gray-300">
                    Implementujemy najlepsze praktyki SEO, aby Twoja strona była dobrze widoczna 
                    w wynikach wyszukiwania Google i przyciągała więcej klientów.
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
              Profesjonalna strona internetowa to podstawa sukcesu w dzisiejszym świecie digital.
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

      <CTA />
    </main>
  );
};

export default WebDevelopment;
