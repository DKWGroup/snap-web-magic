
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
  { id: 1, name: 'Client 1', logo: '/images/client-1.svg' },
  { id: 2, name: 'Client 2', logo: '/images/client-2.svg' },
  { id: 3, name: 'Client 3', logo: '/images/client-3.svg' },
  { id: 4, name: 'Client 4', logo: '/images/client-4.svg' },
  { id: 5, name: 'Client 5', logo: '/images/client-5.svg' },
  { id: 6, name: 'Client 6', logo: '/images/client-6.svg' },
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
                        <div className="w-full h-12 rounded flex items-center justify-center text-orange border border-orange/30">
                          {client.name}
                        </div>
                        {/* Uncomment when you have actual logos */}
                        {/* <img 
                          src={client.logo} 
                          alt={`${client.name} logo`} 
                          className="max-h-16 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        /> */}
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
