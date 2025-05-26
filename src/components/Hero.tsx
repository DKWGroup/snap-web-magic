import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });

      return () => {
        videoElement.removeEventListener('loadeddata', () => {
          setIsVideoLoaded(true);
        });
      };
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-darkBg z-10"></div>
      
      {/* Video Background */}
      <div className={`absolute inset-0 w-full h-full ${isVideoLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/bg.webm" type="video/webm" />
          {/* Fallback to image if video fails to load */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Fallback background image (displays while video is loading or if it fails) */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat"></div>
      
      <div className="container relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Wideo, <span className="text-orange">Social Media</span> i Marketing Internetowy
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
          Chcesz, aby Twoja marka była widoczna w internecie i angażowała odbiorców? DKW Group to agencja kreatywna specjalizująca się w produkcji filmów reklamowych, podcastów, transmisji live oraz kompleksowym marketingu w social media.
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
