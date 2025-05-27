
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const teamMembers = [
  {
    id: 1,
    name: 'Dawid',
    surname: 'Myszka',
    role: 'Producent wideo',
    email: 'dm.mymyszka@gmail.com',
    phone: '+48 517 957 875',
    photo: '/images/kamil-krukowski.png',
    bio: 'Dawid to doświadczony producent wideo z ponad 5-letnim doświadczeniem w branży. Specjalizuje się w produkcji wysokiej jakości materiałów marketingowych i korporacyjnych. Jego kreatywne podejście i dbałość o detale sprawiają, że każdy projekt jest wyjątkowy i profesjonalny.'
  },
  {
    id: 2,
    name: 'Kamil',
    surname: 'Krukowski',
    role: 'Operator drona / Strony WWW / SEO',
    email: 'kamil.krukowski00@gmail.com',
    phone: '+48 881 046 689',
    photo: '/images/kamil-krukowski.png',
    bio: 'Kamil to doświadczony operator drona, który realizuje profesjonalne ujęcia z powietrza na potrzeby filmów reklamowych i transmisji live. Specjalizuje się również w tworzeniu stron internetowych oraz pozycjonowaniu stron w Google, przeprowadzając skuteczne audyty SEO i optymalizacje. Dzięki połączeniu umiejętności operatorskich i wiedzy z zakresu SEO, kompleksowo wspiera klientów w budowaniu silnej marki online.'
  },
  {
    id: 3,
    name: 'Wiktoria',
    surname: 'Skopek',
    role: 'Specjalistka od marketingu / AI ADS',
    email: 'wskopek.all@gmail.com',
    phone: '+48 537 168 645',
    photo: '/images/kamil-krukowski.png',
    bio: 'Wiktoria to specjalistka ds. marketingu z doskonałym wyczuciem trendów i potrzeb klientów. Odpowiada za strategie marketingowe i komunikację z klientami. Jej analityczne podejście i kreatywność pozwalają na tworzenie skutecznych kampanii, które osiągają zamierzone cele.'
  },
];

const TeamSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
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
          className="space-y-20 mt-12"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="aspect-square rounded-lg overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-orange/40 via-orange/10 to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-orange/20 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={member.photo}
                    alt={`${member.name} ${member.surname}`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <h3 className="text-orange text-3xl md:text-4xl font-bold mb-2">
                  {member.name} {member.surname}
                </h3>
                <p className="text-gray-300 text-xl mb-6">{member.role}</p>
                
                <p className="text-gray-300 mb-6 text-lg">
                  {member.bio}
                </p>
                
                <div className="flex flex-col space-y-3 mb-6">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <Mail size={18} className="text-orange mr-3" />
                    {member.email}
                  </a>
                  <a
                    href={`tel:${member.phone.replace(/\s/g, '')}`}
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <Phone size={18} className="text-orange mr-3" />
                    {member.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Learn More Button */}
        <div className="mt-16 text-center">
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
              <Link to="/kontakt">SKONTAKTUJ SIĘ Z NAMI</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
