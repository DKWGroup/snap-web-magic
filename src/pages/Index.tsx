
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import OptimizedImage from '@/components/OptimizedImage';
import { measurePerformance, preloadCriticalResources } from '@/utils/performance';
import { Helmet } from 'react-helmet';

// Lazy load heavy components
const TeamSectionSimple = lazy(() => import('@/components/TeamSectionSimple'));
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const CTA = lazy(() => import('@/components/CTA'));
const FAQSection = lazy(() => import('@/components/FAQSection'));
const ClientsCarousel = lazy(() => import('@/components/ClientsCarousel'));
const ProjectsPreviewSection = lazy(() => import('@/components/ProjectsPreviewSection'));
const CaseStudiesPreviewSection = lazy(() => import('@/components/CaseStudiesPreviewSection'));
const BlogPreviewSection = lazy(() => import('@/components/BlogPreviewSection'));

// Loading component for lazy loaded sections
const SectionSkeleton = () => (
  <div className="py-20">
    <div className="container">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-700 rounded w-1/3 mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-700 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Index = () => {
  useEffect(() => {
    // Initialize performance monitoring
    measurePerformance();
    
    // Preload critical resources
    preloadCriticalResources();
  }, []);

  return (
    <>
      <Helmet>
        <title>DKW Group – Wideo, Social Media i Marketing Internetowy</title>
        <meta 
          name="description" 
          content="Profesjonalne filmy reklamowe, podcasty, live streaming oraz kompleksowa obsługa social media. Zwiększ widoczność swojej marki z DKW Group."
        />
        <meta name="keywords" content="produkcja wideo, social media, marketing internetowy, filmy reklamowe, podcasty, live streaming, strategia marketingowa" />
        <link rel="canonical" href="https://dkwgroup.net" />
        <meta property="og:title" content="DKW Group – Wideo, Social Media i Marketing Internetowy" />
        <meta property="og:description" content="Profesjonalne filmy reklamowe, podcasty, live streaming oraz kompleksowa obsługa social media." />
        <meta property="og:url" content="https://dkwgroup.net" />
        <meta property="og:type" content="website" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/images/hero-bg.jpg" as="image" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap" as="style" />
      </Helmet>

      <main className="bg-darkBg min-h-screen">
        <Hero />

        {/* About Section with optimized image */}
        <section className="py-20">
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Wesprzemy Cię <span className="text-orange">w promocji!</span>
                </h2>
                <p className="text-gray-300">
                  Nasz zespół ekspertów wie, jak tworzyć treści marketingowe, które realnie wspierają sprzedaż i budują lojalność klientów. Oferujemy indywidualne podejście, dopasowane strategie marketingowe oraz pełną obsługę Twoich kanałów social media. Dzięki naszym usługom Twoja marka zyska profesjonalny wizerunek i dotrze do nowych odbiorców.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:w-1/2"
              >
                <div className="aspect-square rounded-lg overflow-hidden">
                  <OptimizedImage
                    src="/images/team/ymao5tMOY0kmEzmuQXnguEJTcDY.jpg_1.webp"
                    alt="DKW Group Team"
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Lazy loaded sections with suspense */}
        <Suspense fallback={<SectionSkeleton />}>
          <ServicesSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <ProjectsPreviewSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <CaseStudiesPreviewSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <BlogPreviewSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <TeamSectionSimple />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <ClientsCarousel />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <FAQSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <CTA />
        </Suspense>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Zacznijmy <span className="text-orange">działać!</span>
                </h2>
                <p className="text-gray-300 mb-6">
                  Masz pytania dotyczące naszych usług? Chcesz się dowiedzieć, jak możemy wspólnie zrealizować Twój projekt? Wypełnij formularz, a my odezwiemy się do Ciebie w ciągu 24 godzin.
                </p>
                <div className="bg-darkCard rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Kontakt</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail size={18} className="text-orange mr-3" />
                      <a href="mailto:contact.dkwgroup@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                        contact.dkwgroup@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone size={18} className="text-orange mr-3" />
                      <a href="tel:+48517957875" className="text-gray-300 hover:text-white transition-colors">
                        +48 517 957 875
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:w-1/2"
              >
                <div className="bg-darkCard rounded-lg p-6">
                  <ContactForm />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
