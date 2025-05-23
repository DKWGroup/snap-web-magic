
import { motion } from 'framer-motion';
import { Video, Target, TrendingUp, Users, PenTool, BarChart } from 'lucide-react';
import CTA from '@/components/CTA';

const MarketingContent = () => {
  const contentTypes = [
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Materiały wideo',
      description: 'Filmy promocyjne, reklamy, testimoniale i materiały instruktażowe.'
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: 'Treści tekstowe',
      description: 'Copywriting, artykuły blogowe, opisy produktów i social media content.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Kampanie reklamowe',
      description: 'Kompleksowe kampanie dla różnych kanałów i grup docelowych.'
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Analiza efektywności',
      description: 'Monitorowanie rezultatów i optymalizacja treści pod kątem konwersji.'
    }
  ];

  const benefits = [
    'Zwiększenie rozpoznawalności marki',
    'Wyższe zaangażowanie odbiorców',
    'Lepsze pozycjonowanie w wyszukiwarkach',
    'Wzrost konwersji i sprzedaży',
    'Budowanie społeczności wokół marki',
    'Profesjonalny wizerunek firmy'
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
              Tworzenie treści <span className="text-orange">marketingowych</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Pomagamy markom wyróżnić się w sieci, tworząc angażujące materiały wideo, 
              poradniki oraz wszelkie treści tekstowe i graficzne dla grup docelowych.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Types */}
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
              Rodzaje <span className="text-orange">treści</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Tworzymy różnorodne materiały marketingowe dostosowane do Twoich celów biznesowych.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contentTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-darkCard p-6 rounded-lg"
              >
                <div className="text-orange mb-4">{type.icon}</div>
                <h3 className="text-white text-xl font-bold mb-3">{type.title}</h3>
                <p className="text-gray-300">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Section */}
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
                Strategiczne <span className="text-orange">podejście</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Nie tworzymy treści na chybił trafił. Każdy materiał jest częścią 
                przemyślanej strategii marketingowej, która ma prowadzić do konkretnych rezultatów.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Target className="text-orange w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Analiza grupy docelowej</h4>
                    <p className="text-gray-300 text-sm">Poznajemy Twoich odbiorców, ich potrzeby i preferencje.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="text-orange w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Trendy i best practices</h4>
                    <p className="text-gray-300 text-sm">Śledzimy najnowsze trendy i sprawdzone praktyki w marketingu.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BarChart className="text-orange w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Mierzalne rezultaty</h4>
                    <p className="text-gray-300 text-sm">Każda akcja ma określone cele i mierniki sukcesu.</p>
                  </div>
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
                <h3 className="text-white text-xl font-bold mb-6 text-center">Korzyści dla Twojej marki</h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <TrendingUp className="text-orange w-4 h-4 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
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
              Proces <span className="text-orange">tworzenia</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-orange w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-white font-bold mb-2">Analiza</h3>
              <p className="text-gray-300 text-sm">Poznajemy Twoją markę, cele i grupę docelową</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-orange w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-white font-bold mb-2">Strategia</h3>
              <p className="text-gray-300 text-sm">Opracowujemy plan działań i kalendarz treści</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-orange w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-white font-bold mb-2">Produkcja</h3>
              <p className="text-gray-300 text-sm">Tworzymy wysokiej jakości treści zgodnie z planem</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-orange w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="text-white font-bold mb-2">Optymalizacja</h3>
              <p className="text-gray-300 text-sm">Analizujemy wyniki i optymalizujemy działania</p>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default MarketingContent;
