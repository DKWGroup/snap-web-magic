import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CTA from '@/components/CTA';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Obsługa Kanału YouTube dla Eksperta Lotniczego',
    client: 'Kokpit Kamila',
    category: 'YouTube Management',
    description: 'Stworzyliśmy kanał "Kokpit Kamila", który zgromadził 5 mln wyświetleń, budując silną markę ekspercką w branży lotniczej.',
    image: '/images/portfolio/mkheli/kamil-matyja.avif',
    caseStudyId: '1',
    stats: [
      { value: '5 000 000+', label: 'wyświetleń na YouTube' },
      { value: '2750+', label: 'subskrybentów' }
    ],
    slug: 'obsługa-kanału-youtube-dla-eksperta-lotniczego'
  },
  {
    id: 2,
    title: 'Kampania Reklamowa dla Investment Partners',
    client: 'Investment Partners',
    category: 'Video Marketing',
    description: 'Stworzyliśmy spot reklamowy dla "Metamorfozy Finansowej", osiągając 30,000+ wyświetleń i setki rejestracji, zwiększając zasięg Investment Partners.',
    image: '/images/portfolio/metamorfoza-finansowa/mBK4aCTKV6GDku02gdKomW5Krns.jpg.webp',
    caseStudyId: '2',
    stats: [
      { value: 'Setki', label: 'rejestracji' },
      { value: '30 000+', label: 'wyświetleń' }
    ],
    slug: 'kampania-reklamowa-dla-investment-partners'
  },
  {
    id: 3,
    title: 'Obsługa Kanału Grzegorz Kusz - Agent Specjalny',
    client: 'Grzegorz Kusz',
    category: 'Content Creation',
    description: 'Kompleksowa obsługa kanału – od nagrań po publikację, budowanie zaangażowanej społeczności i tworzenie wartościowych treści.',
    image: '/images/portfolio/gk/gk-kanal.webp',
    caseStudyId: '3',
    stats: [
      { value: '5 lat', label: 'współpracy' },
      { value: '+450k', label: 'subskrypcji' }
    ],
    slug: 'obsługa-kanału-grzegorz-kusz-agent-specjalny'
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
              Sprawdź wyniki naszych <span className="text-orange">klientów!</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Zobacz nasze najlepsze projekty i przekonaj się, jak możemy pomóc Twojej marce osiągnąć sukces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-darkBg">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-20"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-10 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="text-xs font-semibold text-orange mb-2 uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="bg-darkCard p-4 rounded-lg">
                        <div className="text-orange text-2xl font-bold">
                          {stat.value}
                        </div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="w-full sm:w-auto">
                    <Link to={`/case-studies/${project.slug}`}>
                      Zobacz całe case study
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Media Gallery */}
      {/* <section className="py-20 bg-darkBg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">
              Nasze <span className="text-orange">portfolio</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(9)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-square rounded-lg overflow-hidden"
              >
                <img
                  src={`/images/portfolio-${index + 1}.jpg`}
                  alt={`Portfolio item ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <CTA />
    </main>
  );
};

export default Projects;
