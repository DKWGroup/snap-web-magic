
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Film, Radio, MonitorPlay, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
        <h2 className="section-title">
          Poznaj nasze <span className="text-orange">usługi</span>
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
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

        <div className="mt-12 flex justify-center">
          <Link to="/services">
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
