
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CTA from '@/components/CTA';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 'kokpit-kamila',
    title: 'Obsługa Kanału YouTube dla Eksperta Lotniczego',
    client: 'Kokpit Kamila',
    category: 'YouTube Management',
    description: 'Strategia dla kanału "Kokpit Kamila", który zgromadził 3 mln wyświetleń i 30 tys. subskrybentów, budując silną markę ekspercką w branży lotniczej.',
    image: '/images/project-1.jpg',
    stats: [
      { value: '3 000 000+', label: 'wyświetleń na YouTube' },
      { value: '30 000+', label: 'subskrybentów' }
    ],
    tags: ['YouTube', 'Content Creation', 'Brand Building']
  },
  {
    id: 'investment-partners',
    title: 'Kampania Reklamowa dla Investment Partners',
    client: 'Investment Partners',
    category: 'Video Marketing',
    description: 'Stworzyliśmy spot reklamowy dla "Metamorfozy Finansowej", osiągając 30,000+ wyświetleń i setki rejestracji, zwiększając zasięg Investment Partners.',
    image: '/images/project-2.jpg',
    stats: [
      { value: 'Setki', label: 'rejestracji' },
      { value: '30 000+', label: 'wyświetleń' }
    ],
    tags: ['Video Ads', 'Lead Generation', 'Financial Industry']
  },
  {
    id: 'grzegorz-kusz',
    title: 'Obsługa Kanału Grzegorz Kusz - Agent Specjalny',
    client: 'Grzegorz Kusz',
    category: 'Content Creation',
    description: 'Kompleksowa obsługa kanału – od nagrań po publikację, budowanie zaangażowanej społeczności i tworzenie wartościowych treści.',
    image: '/images/project-3.jpg',
    stats: [
      { value: '5 lat', label: 'współpracy' },
      { value: '+400k', label: 'subskrypcji' }
    ],
    tags: ['Channel Management', 'Community Building', 'Content Strategy']
  }
];

const CaseStudies = () => {
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
              Nasze <span className="text-orange">realizacje</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Poznaj szczegółowe opisy projektów, które zrealizowaliśmy dla naszych klientów i zobacz, jak możemy pomóc również Twojej marce.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 bg-darkBg">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-darkCard rounded-lg overflow-hidden border border-gray-800 h-full flex flex-col">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-orange py-1 px-3 rounded-full">
                      <span className="text-xs font-medium text-white">{study.category}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <h2 className="text-xl font-bold text-white mb-2">{study.title}</h2>
                    <p className="text-gray-400 mb-4">{study.client}</p>
                    <p className="text-gray-300 mb-4 line-clamp-3">{study.description}</p>
                    
                    <div className="flex gap-2 flex-wrap mb-4">
                      {study.tags.map((tag, i) => (
                        <span key={i} className="bg-gray-800 text-xs px-2 py-1 rounded text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6 pt-0 mt-auto">
                    <Link to={`/case-studies/${study.id}`}>
                      <Button 
                        variant="ghost" 
                        className="w-full border border-orange/50 text-orange hover:bg-orange/10 hover:text-orange"
                      >
                        Zobacz szczegóły
                        <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default CaseStudies;
