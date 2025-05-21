
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 bg-darkBg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-orange/20 to-darkCard rounded-lg p-8 md:p-12 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Zacznijmy <span className="text-orange">działać!</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl">
              Nie czekaj — napisz do nas już teraz i dowiedz się, jak możemy wspólnie zrealizować Twoje cele! Czekamy na Twój kontakt!
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-orange hover:bg-orange-dark text-white">
                SKONTAKTUJ SIĘ Z NAMI
              </Button>
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
