
import { motion } from 'framer-motion';
import { PenTool, Palette, Layout, Image, Zap, Eye } from 'lucide-react';
import CTA from '@/components/CTA';

const GraphicDesign = () => {
  const designServices = [
    {
      icon: <PenTool className="w-8 h-8" />,
      title: 'Logo i identyfikacja wizualna',
      description: 'Projektowanie logo, brandingu i kompleksowej identyfikacji wizualnej marki.'
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'Materiały marketingowe',
      description: 'Ulotki, broszury, katalogi, plakaty i inne materiały promocyjne.'
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: 'Grafiki digital',
      description: 'Grafiki do mediów społecznościowych, stron internetowych i kampanii online.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Packaging design',
      description: 'Projektowanie opakowań produktów i etykiet zgodnych z brandingiem.'
    }
  ];

  const designTypes = [
    'Logo i identyfikacja wizualna',
    'Wizytówki i papeteria firmowa',
    'Ulotki i broszury',
    'Plakaty i banery',
    'Grafiki do social media',
    'Projektowanie stron internetowych',
    'Infografiki',
    'Prezentacje multimedialne',
    'Packaging i etykiety',
    'Materiały targowe'
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
              Projektowanie <span className="text-orange">graficzne</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Projektowanie logo, identyfikacji wizualnej, materiałów marketingowych, 
              grafik do mediów społecznościowych i stron internetowych.
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
              Nasze <span className="text-orange">usługi</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Tworzymy spójną identyfikację wizualną, która wyróżni Twoją markę na rynku.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designServices.map((service, index) => (
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

      {/* Design Process */}
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
              Proces <span className="text-orange">projektowania</span>
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
              <h3 className="text-white font-bold mb-2">Brief</h3>
              <p className="text-gray-300 text-sm">Poznajemy Twoją markę, wartości i oczekiwania</p>
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
              <h3 className="text-white font-bold mb-2">Koncepcja</h3>
              <p className="text-gray-300 text-sm">Opracowujemy kilka propozycji do wyboru</p>
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
              <h3 className="text-white font-bold mb-2">Realizacja</h3>
              <p className="text-gray-300 text-sm">Dopracowujemy wybraną koncepcję do perfekcji</p>
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
              <h3 className="text-white font-bold mb-2">Wdrożenie</h3>
              <p className="text-gray-300 text-sm">Dostarczamy gotowe pliki w różnych formatach</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
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
                Nasza <span className="text-orange">ekspertyza</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Nasz zespół to doświadczeni graficy, którzy łączą kreatywność z znajomością 
                najnowszych trendów w designie. Każdy projekt traktujemy indywidualnie, 
                dbając o najdrobniejsze detale.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {designTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center text-sm"
                  >
                    <Eye className="text-orange w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">{type}</span>
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
                <h3 className="text-white text-2xl font-bold mb-4">Nowoczesne narzędzia</h3>
                <p className="text-gray-300 mb-6">
                  Korzystamy z najnowszych programów graficznych i narzędzi designerskich, 
                  aby zapewnić najwyższą jakość projektów.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-darkBg/50 p-4 rounded-lg">
                    <p className="text-orange font-semibold">Adobe Creative Suite</p>
                    <p className="text-gray-400 text-sm mt-1">Photoshop, Illustrator, InDesign</p>
                  </div>
                  <div className="bg-darkBg/50 p-4 rounded-lg">
                    <p className="text-orange font-semibold">Modern Tools</p>
                    <p className="text-gray-400 text-sm mt-1">Figma, Sketch, Canva Pro</p>
                  </div>
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

export default GraphicDesign;
