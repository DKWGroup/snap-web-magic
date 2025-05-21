
import { motion } from 'framer-motion';
import { ArrowRight, Film, Radio, MonitorPlay, Video, MessageSquare, PenTool, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '@/components/CTA';

const services = [
  {
    id: 1,
    title: 'Produkcja filmowa',
    description:
      'Tworzymy materiały wideo od koncepcji (brief), 3D oraz po profesjonalne nagrania. Każde nagranie jest dopracowane pod kątem jakości i detalu.',
    icon: <Film className="w-8 h-8" />,
    link: '/services/video-production',
  },
  {
    id: 2,
    title: 'Podcasty',
    description:
      'Pełna wsparcie w tworzeniu podcastów – od nagrania w naszym profesjonalnym studiu, przez montaż, po publikację na mediach społecznościowych.',
    icon: <Radio className="w-8 h-8" />,
    link: '/services/podcasts',
  },
  {
    id: 3,
    title: 'Realizacja na żywo',
    description:
      'Obsługujemy live streamy z konferencji, wydarzeń czy szkoleń. Dostarczamy mobilne studio realizacyjne gotowe do pracy w terenie i zdalnie.',
    icon: <MonitorPlay className="w-8 h-8" />,
    link: '/services/live-streaming',
  },
  {
    id: 4,
    title: 'Tworzenie treści marketingowych',
    description:
      'Pomagamy markom wyróżnić się w sieci, tworząc angażujące materiały wideo, poradniki oraz wszelkie treści tekstowe i graficzne dla grup docelowych.',
    icon: <Video className="w-8 h-8" />,
    link: '/services/marketing-content',
  },
  {
    id: 5,
    title: 'Social Media',
    description:
      'Kompleksowa obsługa kanałów społecznościowych, od strategii komunikacji, przez tworzenie treści, po analizę efektywności i optymalizację działań.',
    icon: <MessageSquare className="w-8 h-8" />,
    link: '/services/social-media',
  },
  {
    id: 6,
    title: 'Projektowanie graficzne',
    description:
      'Projektowanie logo, identyfikacji wizualnej, materiałów marketingowych, grafik do mediów społecznościowych i stron internetowych.',
    icon: <PenTool className="w-8 h-8" />,
    link: '/services/graphic-design',
  }
];

const Services = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Poznaj nasze <span className="text-orange">usługi</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Oferujemy kompleksowe rozwiązania z zakresu produkcji wideo, marketingu i kreacji treści, które pomogą Twojej marce się wyróżnić.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-darkBg">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-darkCard p-6 rounded-lg border border-gray-800 hover:border-orange/50 transition-colors flex flex-col h-full"
              >
                <div className="text-orange mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6 flex-grow">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-orange hover:text-orange-light transition-colors group mt-auto"
                >
                  <span>DOWIEDZ SIĘ WIĘCEJ</span>
                  <ArrowRight
                    size={16}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Dlaczego <span className="text-orange">warto</span> z nami współpracować?
            </h2>
            <p className="text-lg text-gray-300">
              Łączymy kreatywność, doświadczenie i nowoczesne technologie, aby zapewnić najwyższą jakość usług.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-darkCard p-6 rounded-lg flex items-start"
            >
              <BadgeCheck className="text-orange w-6 h-6 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">Doświadczony zespół</h3>
                <p className="text-gray-300 text-sm">
                  Nasz zespół składa się z doświadczonych specjalistów, którzy od lat pracują w branży mediów i marketingu.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-darkCard p-6 rounded-lg flex items-start"
            >
              <BadgeCheck className="text-orange w-6 h-6 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">Nowoczesny sprzęt</h3>
                <p className="text-gray-300 text-sm">
                  Korzystamy z najnowszego sprzętu i oprogramowania, aby zapewnić najwyższą jakość naszych produkcji.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-darkCard p-6 rounded-lg flex items-start"
            >
              <BadgeCheck className="text-orange w-6 h-6 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">Indywidualne podejście</h3>
                <p className="text-gray-300 text-sm">
                  Każdy klient i projekt jest dla nas wyjątkowy. Zawsze dostosowujemy nasze usługi do konkretnych potrzeb i celów.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-darkCard p-6 rounded-lg flex items-start"
            >
              <BadgeCheck className="text-orange w-6 h-6 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">Kompleksowa obsługa</h3>
                <p className="text-gray-300 text-sm">
                  Oferujemy usługi od koncepcji, przez produkcję, po post-produkcję i dystrybucję treści.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-darkCard p-6 rounded-lg flex items-start"
            >
              <BadgeCheck className="text-orange w-6 h-6 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">Terminowość</h3>
                <p className="text-gray-300 text-sm">
                  Zawsze dotrzymujemy ustalonych terminów, zapewniając wysoką jakość przy zachowaniu efektywności czasowej.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-darkCard p-6 rounded-lg flex items-start"
            >
              <BadgeCheck className="text-orange w-6 h-6 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">Doskonałe rezultaty</h3>
                <p className="text-gray-300 text-sm">
                  Nasze projekty przyczyniają się do realnego wzrostu rozpoznawalności i efektywności marketingowej naszych klientów.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default Services;
