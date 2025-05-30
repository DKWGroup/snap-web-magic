
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import OptimizedImage from './OptimizedImage';

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Preload video only after hero is in view and on faster connections
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Check connection quality before loading video
          const connection = (navigator as any).connection;
          const isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
          
          if (!isSlowConnection) {
            setShouldLoadVideo(true);
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoadVideo) return;

    const videoElement = videoRef.current;
    if (videoElement) {
      const handleLoadedData = () => setIsVideoLoaded(true);
      videoElement.addEventListener('loadeddata', handleLoadedData);

      return () => {
        videoElement.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, [shouldLoadVideo]);

  return (
    <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-darkBg z-10"></div>
      
      {/* Optimized Video Background */}
      {shouldLoadVideo && (
        <div className={`absolute inset-0 w-full h-full ${isVideoLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/bg.webm" type="video/webm" />
          </video>
        </div>
      )}

      {/* Optimized Fallback background image */}
      <div className="absolute inset-0">
        <OptimizedImage
          src="/images/hero-bg.jpg"
          alt="DKW Group Hero Background"
          className="w-full h-full object-cover"
          priority={true}
          sizes="100vw"
        />
      </div>
      
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
            <Link to="/kontakt">
              <Button size="lg" className="bg-orange hover:bg-orange-dark text-white flex items-center gap-2 px-6 py-6">
                SKONTAKTUJ SIĘ <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/projekty">
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
