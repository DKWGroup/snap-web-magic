
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Obsługa Kanału YouTube dla Eksperta Lotniczego',
    client: 'Kokpit Kamila',
    description: 'Stworzyliśmy kanał "Kokpit Kamila", który zgromadził 3 mln wyświetleń, budując silną markę ekspercką Kamila Majdy w branży lotniczej.',
    image: '/images/portfolio/mkheli/kamil-matyja.avif',
    url: '/case-studies/obsluga-kanalu-youtube-dla-eksperta-lotniczego'
  },
  {
    id: 2,
    title: 'Kampania Reklamowa dla Investment Partners',
    client: 'Investment Partners',
    description: 'Stworzyliśmy spot reklamowy dla "Metamorfozy Finansowej", osiągając 30,000+ wyświetleń i setki rejestracji, zwiększając zasięg Investment Partners.',
    image: '/images/portfolio/metamorfoza-finansowa/mBK4aCTKV6GDku02gdKomW5Krns.jpg.webp',
    url: '/case-studies/kampania-reklamowa-dla-investment-partners'
  }
];

const ProjectsPreviewSection = () => {
  return (
    <section className="py-20 bg-darkBg">
      <div className="container">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Nasze <span className="text-orange">projekty</span>
          </h2>
          <Link to="/projekty" className="text-orange hover:text-orange-400 transition-colors flex items-center gap-2">
            Zobacz wszystkie <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-darkCard rounded-lg overflow-hidden group hover:border-orange/20 hover:border border border-transparent transition-all"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-orange mb-2 uppercase">
                  {project.client}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to={`${project.url}`}>
                    <Button variant="outline" size="sm">
                      Zobacz case study <ArrowRight size={14} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/projekty">
            <Button size="lg" className="bg-orange hover:bg-orange-dark text-white">
              ZOBACZ WIĘCEJ PROJEKTÓW
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreviewSection;
