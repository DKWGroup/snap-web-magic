
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// Client logos array
const clients = [
  { id: 1, name: 'akademia Lutowania', logo: '/images/clients/akademia-lutowania.webp' },
  { id: 2, name: 'Contenty', logo: '/images/clients/contenty.webp' },
  { id: 3, name: 'Grzegorz Kusz - Agent Specjalny', logo: '/images/clients/gk.webp' },
  { id: 4, name: 'GlowUP', logo: '/images/clients/glowup.webp' },
  { id: 5, name: 'Investment Partners', logo: '/images/clients/inp.svg' },
  { id: 6, name: 'WellDone', logo: '/images/clients/welldone.webp' },
  { id: 7, name: 'Kamil Matyja - MKHelicopters', logo: '/images/clients/mkhelicopters.webp' },
];

const ClientsCarousel = () => {
  return (
    <section className="py-16 bg-darkBg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="section-title mb-12">
            Zaufali <span className="text-orange">nam</span>
          </h2>

          <div className="relative px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {clients.map((client) => (
                  <CarouselItem key={client.id} className="pl-2 md:pl-4 lg:basis-1/4 md:basis-1/3 sm:basis-1/2">
                    <div className="p-4 bg-darkCard rounded-lg h-28 flex items-center justify-center">
                      <div className="h-16 w-full flex items-center justify-center">
                        {/* Use placeholder for development */}
                        {/* <div className="w-full h-12 rounded flex items-center justify-center text-orange border border-orange/30">
                          {client.name}
                        </div> */}
                        {/* Uncomment when you have actual logos */}
                        <img 
                          src={client.logo} 
                          alt={`${client.name} logo`} 
                          className="max-h-16 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 bg-darkCard border-orange/30 text-orange hover:bg-orange/10" />
              <CarouselNext className="right-0 bg-darkCard border-orange/30 text-orange hover:bg-orange/10" />
            </Carousel>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
