
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const teamMembers = [
  {
    id: 1,
    name: 'Dawid',
    surname: 'Myszka',
    role: 'Video Producer',
    email: 'dm.mymyszka@gmail.com',
    phone: '+48 517 957 875',
    photo: '/images/dawid-myszka.jpg',
  },
  {
    id: 2,
    name: 'Kamil',
    surname: 'Krukowski',
    role: 'Video Editor',
    email: 'kamil.krukowski00@gmail.com',
    phone: '+48 881 046 689',
    photo: '/images/kamil-krukowski.jpg',
  },
  {
    id: 3,
    name: 'Wiktoria',
    surname: 'Skopek',
    role: 'Marketing Specialist',
    email: 'wskopek.all@gmail.com',
    phone: '+48 537 168 645',
    photo: '/images/wiktoria-skopek.jpg',
  },
];

const TeamSection = () => {
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
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-darkBg">
      <div className="container">
        <h2 className="section-title">Poznaj nasz <span className="text-orange">zespół</span></h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="relative rounded-lg overflow-hidden group"
            >
              <div className="aspect-[3/4] bg-darkCard relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-orange/20 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={member.photo}
                  alt={`${member.name} ${member.surname}`}
                  className="w-full h-full object-cover object-center z-0 absolute inset-0"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-orange text-2xl md:text-3xl font-bold mb-1">
                    {member.name}
                    <br />
                    {member.surname}
                  </h3>
                  <p className="text-gray-300 mb-4">{member.role}</p>
                  <div className="flex flex-col space-y-2 text-sm">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center text-gray-300 hover:text-white transition-colors"
                    >
                      <Mail size={16} className="text-orange mr-2" />
                      {member.email}
                    </a>
                    <a
                      href={`tel:${member.phone.replace(/\s/g, '')}`}
                      className="flex items-center text-gray-300 hover:text-white transition-colors"
                    >
                      <Phone size={16} className="text-orange mr-2" />
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Learn More Button */}
        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              variant="default" 
              className="bg-orange hover:bg-orange/80 text-white font-medium px-8 py-6"
              asChild
            >
              <Link to="/about">POZNAJ NAS LEPIEJ</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
