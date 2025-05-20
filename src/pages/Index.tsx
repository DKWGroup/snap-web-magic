
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import Hero from '@/components/Hero';
import TeamSection from '@/components/TeamSection';
import ServicesSection from '@/components/ServicesSection';
import CTA from '@/components/CTA';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  return (
    <main className="bg-darkBg min-h-screen">
      <Hero />

      {/* About Section */}
      <section className="py-20 bg-darkBg">
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
              <p className="text-gray-300 mb-6">
                DKW Group to zespół specjalistów, którzy wiedzą, jak tworzyć treści wideo i marketingowe, które angażują odbiorców i budują rozpoznawalność Twojej marki.
              </p>
              <p className="text-gray-300">
                Nasze podejście opiera się na zrozumieniu Twoich potrzeb i celów biznesowych. Dzięki temu możemy stworzyć treści, które nie tylko wyglądają profesjonalnie, ale także efektywnie wspierają Twoją strategię marketingową.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="/images/about-us.jpg"
                  alt="DKW Group Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ServicesSection />
      
      <TeamSection />
      
      {/* Projects Preview Section */}
      <section className="py-20 bg-darkBg">
        <div className="container">
          <h2 className="section-title">
            Sprawdź wyniki naszych <span className="text-orange">klientów!</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-darkCard rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="text-xs font-semibold text-orange mb-2 uppercase">Case Study</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Obsługa Kanału YouTube dla Eksperta Lotniczego
                </h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Stworzyliśmy kanał "Kokpit Kamila", który zgromadził 3 mln wyświetleń, budując silną markę ekspercką Kamila Majdy w branży lotniczej.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-darkBg/50 p-4 rounded-lg">
                    <div className="text-orange text-2xl font-bold">3 000 000+</div>
                    <div className="text-gray-400 text-sm">wyświetleń</div>
                  </div>
                  <div className="bg-darkBg/50 p-4 rounded-lg">
                    <div className="text-orange text-2xl font-bold">1 300 000</div>
                    <div className="text-gray-400 text-sm">wyświetleń</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-darkCard rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="text-xs font-semibold text-orange mb-2 uppercase">Case Study</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Kampania Reklamowa dla Investment Partners
                </h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Stworzyliśmy spot reklamowy dla "Metamorfozy Finansowej", osiągając 30,000+ wyświetleń i setki rejestracji, zwiększając zasięg Investment Partners.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-darkBg/50 p-4 rounded-lg">
                    <div className="text-orange text-2xl font-bold">Setki</div>
                    <div className="text-gray-400 text-sm">rejestracji</div>
                  </div>
                  <div className="bg-darkBg/50 p-4 rounded-lg">
                    <div className="text-orange text-2xl font-bold">30 000+</div>
                    <div className="text-gray-400 text-sm">wyświetleń</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />

      {/* Contact Section */}
      <section className="py-20 bg-darkBg">
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
  );
};

export default Index;
