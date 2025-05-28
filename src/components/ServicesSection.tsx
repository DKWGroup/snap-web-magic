
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Film, Radio, MonitorPlay, Globe, Palette, Video, BarChart3, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 1,
    title: 'Produkcja filmowa',
    description:
      'Tworzymy materiały wideo od koncepcji (brief), 3D oraz po profesjonalne nagrania. Każde nagranie jest dopracowane pod kątem jakości i detalu.',
    icon: <Film className="w-8 h-8" />,
    link: '/uslugi/produkcja-wideo',
  },
  {
    id: 2,
    title: 'Nagrania dronem',
    description:
      'Spektakularne ujęcia z powietrza przy użyciu dronów DJI i FPV. Tworzymy dynamiczne nagrania krajobrazów, nieruchomości i wydarzeń z unikalnej perspektywy.',
    icon: <Plane className="w-8 h-8" />,
    link: '/uslugi/nagrania-dronem',
  },
  {
    id: 3,
    title: 'Podcasty',
    description:
      'Pełna wsparcie w tworzeniu podcastów – od nagrania w naszym profesjonalnym studiu, przez montaż, po publikację na mediach społecznościowych.',
    icon: <Radio className="w-8 h-8" />,
    link: '/uslugi/podcasty',
  },
  {
    id: 4,
    title: 'Realizacja na żywo',
    description:
      'Obsługujemy live streamy z konferencji, wydarzeń czy szkoleń. Dostarczamy mobilne studio realizacyjne gotowe do pracy w terenie i zdalnie.',
    icon: <MonitorPlay className="w-8 h-8" />,
    link: '/uslugi/live-streaming',
  },
  {
    id: 5,
    title: 'Strony internetowe i SEO',
    description:
      'Projektowanie i tworzenie responsywnych stron internetowych oraz optymalizacja pod kątem wyszukiwarek, aby zwiększyć widoczność Twojej marki online.',
    icon: <Globe className="w-8 h-8" />,
    link: '/uslugi/strony-internetowe',
  },
  {
    id: 6,
    title: 'Treści marketingowe',
    description:
      'Tworzymy angażujące treści marketingowe, które docierają do Twoich klientów i budują świadomość marki.',
    icon: <BarChart3 className="w-8 h-8" />,
    link: '/uslugi/marketing-content',
  },
  {
    id: 7,
    title: 'Social Media',
    description:
      'Kompleksowa obsługa social media, która zwiększa zasięgi i buduje zaangażowaną społeczność wokół Twojej marki.',
    icon: <Video className="w-8 h-8" />,
    link: '/uslugi/social-media',
  },
];

const ServicesSection = () => {
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
    <section className="py-20 bg-darkBg">
      <div className="container">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Nasze <span className="text-orange">usługi</span>
          </h2>
          <Link to="/uslugi" className="text-orange hover:text-orange-400 transition-colors flex items-center gap-2">
            Zobacz wszystkie <ArrowRight size={16} />
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-darkCard p-6 rounded-lg border border-gray-800 hover:border-orange/50 transition-colors group"
            >
              <div className="text-orange mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <Link
                to={service.link}
                className="inline-flex items-center text-orange hover:text-orange-light transition-colors group"
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

        <div className="mt-10 text-center">
          <Link to="/uslugi">
            <Button size="lg" className="bg-orange hover:bg-orange-dark text-white">
              ZOBACZ WSZYSTKIE USŁUGI
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
