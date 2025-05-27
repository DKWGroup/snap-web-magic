
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import TeamSectionSimple from '@/components/TeamSectionSimple';
import ServicesSection from '@/components/ServicesSection';
import CTA from '@/components/CTA';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import ClientsCarousel from '@/components/ClientsCarousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProjectsPreviewSection from '@/components/ProjectsPreviewSection';
import CaseStudiesPreviewSection from '@/components/CaseStudiesPreviewSection';
import BlogPreviewSection from '@/components/BlogPreviewSection';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>DKW Group – Wideo, Social Media i Marketing Internetowy</title>
        <meta 
          name="description" 
          content="Profesjonalne filmy reklamowe, podcasty, live streaming oraz kompleksowa obsługa social media. Zwiększ widoczność swojej marki z DKW Group."
        />
        {/* Dodatkowe meta tagi dla lepszego SEO */}
        <meta name="keywords" content="produkcja wideo, social media, marketing internetowy, filmy reklamowe, podcasty, live streaming, strategia marketingowa" />
        <link rel="canonical" href="https://dkwgroup.net" />
        <meta property="og:title" content="DKW Group – Wideo, Social Media i Marketing Internetowy" />
        <meta property="og:description" content="Profesjonalne filmy reklamowe, podcasty, live streaming oraz kompleksowa obsługa social media." />
        <meta property="og:url" content="https://dkwgroup.net" />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="bg-darkBg min-h-screen">
      <Hero />

      {/* About Section */}
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
                <img
                  src="/images/team/ymao5tMOY0kmEzmuQXnguEJTcDY.jpg_1.webp"
                  alt="DKW Group Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ServicesSection />
      
      <ProjectsPreviewSection />
      
      <CaseStudiesPreviewSection />
      
      <BlogPreviewSection />
      
      <TeamSectionSimple />
      
      <ClientsCarousel />

      <FAQSection />

      <CTA />

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
