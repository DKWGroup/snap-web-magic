
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const teamMembers = [
  {
    id: 1,
    name: 'Dawid',
    surname: 'Myszka',
    role: 'Producent wideo',
    photo: '/lovable-uploads/bdf54321-26c4-42a0-b0fe-a0f56d3f982e.png',
  },
  {
    id: 2,
    name: 'Kamil',
    surname: 'Krukowski',
    role: 'Operator drona / Strony WWW / SEO',
    photo: '/lovable-uploads/b8edff52-ea27-433a-9dc1-87657ee93a24.png',
  },
  {
    id: 3,
    name: 'Wiktoria',
    surname: 'Skopek',
    role: 'Specjalistka od marketingu / AI ADS',
    photo: '/lovable-uploads/5adcc047-97ec-4720-9469-9b5a32b32338.png',
  },
];

const TeamSectionSimple = () => {
  const { t } = useLanguage();
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const getSectionTitle = () => {
    return 'Poznaj nasz zespół';
  };

  const getAboutPath = () => {
    return '/o-nas';
  };

  return (
    <section className="py-20 bg-darkBg">
      <div className="container">
        <h2 className="section-title">{getSectionTitle()}</h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 relative group">
                <div className="absolute inset-0 bg-orange/20 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={member.photo}
                  alt={`${member.name} ${member.surname}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <h3 className="text-orange text-xl font-bold mb-1">
                {member.name} {member.surname}
              </h3>
              <p className="text-gray-300 mb-3">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Learn More Button */}
        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              variant="default" 
              className="bg-orange hover:bg-orange/80 text-white font-medium px-8 py-6"
              asChild
            >
              <Link to={getAboutPath()}>{t('common.learnMore')}</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSectionSimple;
