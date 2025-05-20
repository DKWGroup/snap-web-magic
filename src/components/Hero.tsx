
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-darkBg z-10"></div>
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat"></div>
      
      <div className="container relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Zróbmy razem coś <span className="text-orange">wyjątkowego</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            Chcesz rozwinąć swoją markę lub projekt? Skontaktuj się z nami! Nasze doświadczenie i pasja do tworzenia wyjątkowych treści wideo pomogą Ci dotrzeć do nowych odbiorców i wyróżnić się na tle konkurencji.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-orange hover:bg-orange-dark text-white flex items-center gap-2 px-6 py-6">
                SKONTAKTUJ SIĘ <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6">
                ZOBACZ NASZE PROJEKTY
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
