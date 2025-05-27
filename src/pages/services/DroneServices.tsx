
import { motion } from 'framer-motion';
import { ArrowRight, Plane, Camera, MapPin, Wind, CheckCircle, Star, Eye, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import CTA from '@/components/CTA';

const DroneServices = () => {
  const benefits = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Unikalne perspektywy',
      description: 'Ujęcia z powietrza, które wyróżnią Twoją markę i zachwycą odbiorców.'
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: 'Jakość 4K i 6K',
      description: 'Profesjonalne kamery zapewniające najwyższą jakość obrazu.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Precyzyjne manewry',
      description: 'Doświadczeni piloci wykonują najbardziej wymagające ujęcia.'
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: 'Dynamiczne ujęcia FPV',
      description: 'Spektakularne przeloty przez trudno dostępne miejsca.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Konsultacja i planowanie',
      description: 'Omawiamy Twoje potrzeby, lokalizację i rodzaj ujęć. Sprawdzamy dozwolone strefy lotów.'
    },
    {
      step: '02',
      title: 'Przygotowanie sprzętu',
      description: 'Dobieramy odpowiedni dron (DJI lub FPV) i konfigurujemy ustawienia kamery.'
    },
    {
      step: '03',
      title: 'Realizacja nagrań',
      description: 'Wykonujemy profesjonalne nagrania z zachowaniem najwyższych standardów bezpieczeństwa.'
    },
    {
      step: '04',
      title: 'Post-produkcja',
      description: 'Montujemy materiał, dodajemy efekty i dostarczamy gotowy film w wybranym formacie.'
    }
  ];

  const portfolio = [
    {
      title: 'Nagrania nieruchomości',
      description: 'Spektakularne ujęcia domów i działek z perspektywy ptaka',
      image: 'photo-1487887235947-a955ef187fcc'
    },
    {
      title: 'Ujęcia krajobrazowe',
      description: 'Piękne krajobrazy i lokalizacje turystyczne',
      image: 'photo-1501854140801-50d01698950b'
    },
    {
      title: 'Wydarzenia i imprezy',
      description: 'Dynamiczne ujęcia z eventów i uroczystości',
      image: 'photo-1433086966358-54859d0ed716'
    }
  ];

  const faqs = [
    {
      question: 'Czy posiadacie odpowiednie licencje na loty dronem?',
      answer: 'Tak, wszyscy nasi piloci posiadają aktualne licencje VLOS oraz wszystkie wymagane ubezpieczenia. Przestrzegamy przepisów UAS i EASA.'
    },
    {
      question: 'W jakich lokalizacjach możecie wykonywać nagrania?',
      answer: 'Wykonujemy loty w strefach dozwolonych zgodnie z mapą ograniczeń lotów. Przed każdym zleceniem sprawdzamy możliwości lotów w danej lokalizacji.'
    },
    {
      question: 'Jaka jest różnica między dronem DJI a FPV?',
      answer: 'Drony DJI oferują stabilne, precyzyjne ujęcia idealne do nieruchomości i wydarzeń. Drony FPV pozwalają na dynamiczne, kinowe ujęcia z szybkimi manewrami.'
    },
    {
      question: 'Ile czasu zajmuje realizacja projektu?',
      answer: 'Standardowy projekt (nagranie + montaż) realizujemy w ciągu 7-14 dni roboczych. Pilne zlecenia możemy wykonać w trybie ekspresowym.'
    },
    {
      question: 'Czy wykonujecie nagrania w trudnych warunkach pogodowych?',
      answer: 'Bezpieczeństwo jest priorytetem. Loty wykonujemy tylko przy sprzyjających warunkach pogodowych, zgodnie z wytycznymi producenta sprzętu.'
    }
  ];

  return (
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange/20 rounded-full mb-6">
              <Plane className="w-8 h-8 text-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nagrania <span className="text-orange">dronem</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Spektakularne ujęcia z powietrza przy użyciu profesjonalnych dronów DJI i FPV. 
              Tworzymy unikalne perspektywy, które zachwycą Twoich odbiorców.
            </p>
            <Link to="/kontakt">
              <Button size="lg" className="bg-orange hover:bg-orange-dark text-white">
                ZAMÓW NAGRANIE DRONEM
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Description */}
      <section className="py-20 bg-darkBg">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Profesjonalne nagrania z <span className="text-orange">powietrza</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Oferujemy kompleksowe usługi nagrań dronem przy użyciu najnowocześniejszego sprzętu. 
                Nasze drony DJI zapewniają stabilne, wysokiej jakości ujęcia, idealne do prezentacji 
                nieruchomości, wydarzeń i krajobrazów.
              </p>
              <p className="text-gray-300 mb-8">
                Dla bardziej dynamicznych ujęć wykorzystujemy drony FPV, które pozwalają na 
                spektakularne przeloty przez wnętrza budynków, lasy czy trudno dostępne lokalizacje, 
                tworząc kinowe ujęcia pełne emocji.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-darkCard p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">Drony DJI</h4>
                  <p className="text-gray-300 text-sm">Stabilne ujęcia 4K/6K</p>
                </div>
                <div className="bg-darkCard p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">Drony FPV</h4>
                  <p className="text-gray-300 text-sm">Dynamiczne manewry</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Profesjonalny dron DJI w locie"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-darkBg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Dlaczego <span className="text-orange">nagrania dronem</span>?
            </h2>
            <p className="text-lg text-gray-300">
              Ujęcia z powietrza to sposób na wyróżnienie się i pokazanie swojej marki z zupełnie nowej perspektywy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-darkCard p-6 rounded-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange/20 rounded-full mb-4">
                  <div className="text-orange">{benefit.icon}</div>
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 bg-darkBg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nasze <span className="text-orange">realizacje</span>
            </h2>
            <p className="text-lg text-gray-300">
              Zobacz przykłady naszych nagrań dronem w różnych kategoriach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-darkCard rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${item.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-darkBg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Proces <span className="text-orange">realizacji</span>
            </h2>
            <p className="text-lg text-gray-300">
              Od pierwszej konsultacji do gotowego materiału - tak wygląda nasza współpraca.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange/20 rounded-full mb-4">
                  <span className="text-orange text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-darkBg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Często zadawane <span className="text-orange">pytania</span>
            </h2>
            <p className="text-lg text-gray-300">
              Odpowiadamy na najczęstsze pytania dotyczące nagrań dronem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-darkCard rounded-lg px-6 border border-gray-800"
                >
                  <AccordionTrigger className="text-white hover:text-orange transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default DroneServices;
