
import { motion } from 'framer-motion';
import { Mic, Radio, Upload, Headphones, Settings, Users } from 'lucide-react';
import CTA from '@/components/CTA';

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

      <CTA />
    </main>
  );
};

export default Podcasts;
