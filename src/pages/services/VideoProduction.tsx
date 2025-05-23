
import { motion } from 'framer-motion';
import { Camera, PlayCircle, FileVideo, Edit, Zap, Users } from 'lucide-react';
import CTA from '@/components/CTA';

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

      <CTA />
    </main>
  );
};

export default VideoProduction;
