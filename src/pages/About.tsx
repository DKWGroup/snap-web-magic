
import { motion } from 'framer-motion';
import TeamSection from '@/components/TeamSection';
import CTA from '@/components/CTA';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <title>O nas – DKW Group | Zespół ekspertów od wideo i social media</title>
        <meta 
          name="description" 
          content="Poznaj zespół DKW Group – specjalistów od produkcji wideo, marketingu internetowego i obsługi social media. Dowiedz się, jak nasze doświadczenie pomoże Twojej marce."
        />
      </Helmet>
      <main className="bg-darkBg min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-darkBg">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                O <span className="text-orange">nas</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-12">
                Jesteśmy zespołem profesjonalistów z pasją do tworzenia wyjątkowych treści wideo i marketingowych.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-[16/9] rounded-lg overflow-hidden mt-8"
            >
              <img
                src="/images/team/83zS6ZMNclQzv0e3WVCR9L7uBQ.webp"
                alt="DKW Group Team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-darkBg">
          <div className="container">
            <h2 className="section-title">
              Nasza <span className="text-orange">historia</span>
            </h2>
            
            <div className="flex flex-col lg:flex-row gap-12 mt-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2"
              >
                <p className="text-gray-300 mb-6">
                  DKW Group powstało z pasji do tworzenia wyjątkowych treści wideo, które nie tylko wyglądają profesjonalnie, ale przede wszystkim skutecznie realizują cele marketingowe naszych klientów.
                </p>
                <p className="text-gray-300 mb-6">
                  Założyciele firmy - Dawid, Kamil i Wiktoria - połączyli swoje doświadczenie i umiejętności, aby stworzyć agencję, która oferuje kompleksowe usługi w zakresie produkcji wideo, marketingu internetowego i tworzenia angażujących treści.
                </p>
                <p className="text-gray-300">
                  Od momentu powstania, naszym celem jest pomaganie markom w wyróżnieniu się na rynku poprzez profesjonalne materiały wideo i skuteczne strategie marketingowe. Przez lata działalności zrealizowaliśmy setki projektów dla klientów z różnych branż, zawsze stawiając na najwyższą jakość i indywidualne podejście.
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
                    src="/images/team/gb5f94PwAgYLLdVXOJAvcRs2ucM.jpg.webp"
                    alt="DKW Group Story"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-darkBg">
          <div className="container">
            <h2 className="section-title">
              Nasze <span className="text-orange">wartości</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-darkCard p-6 rounded-lg border border-gray-800"
              >
                <div className="text-orange text-2xl font-bold mb-4">01</div>
                <h3 className="text-white text-xl font-semibold mb-3">Jakość</h3>
                <p className="text-gray-300">
                  Stawiamy na najwyższą jakość realizowanych projektów, dbając o każdy, nawet najmniejszy detal. Wykorzystujemy profesjonalny sprzęt i nowoczesne technologie.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-darkCard p-6 rounded-lg border border-gray-800"
              >
                <div className="text-orange text-2xl font-bold mb-4">02</div>
                <h3 className="text-white text-xl font-semibold mb-3">Kreatywność</h3>
                <p className="text-gray-300">
                  Nieustannie poszukujemy nowych, kreatywnych rozwiązań, które pozwolą naszym klientom wyróżnić się na tle konkurencji i skutecznie dotrzeć do odbiorców.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-darkCard p-6 rounded-lg border border-gray-800"
              >
                <div className="text-orange text-2xl font-bold mb-4">03</div>
                <h3 className="text-white text-xl font-semibold mb-3">Zaangażowanie</h3>
                <p className="text-gray-300">
                  W każdy projekt angażujemy się w 100%, traktując cele naszych klientów jak swoje własne. Dzięki temu możemy osiągać wyjątkowe rezultaty.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-darkCard p-6 rounded-lg border border-gray-800"
              >
                <div className="text-orange text-2xl font-bold mb-4">04</div>
                <h3 className="text-white text-xl font-semibold mb-3">Profesjonalizm</h3>
                <p className="text-gray-300">
                  Pracujemy zgodnie z najwyższymi standardami branżowymi, zapewniając profesjonalną obsługę na każdym etapie realizacji projektu.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-darkCard p-6 rounded-lg border border-gray-800"
              >
                <div className="text-orange text-2xl font-bold mb-4">05</div>
                <h3 className="text-white text-xl font-semibold mb-3">Innowacyjność</h3>
                <p className="text-gray-300">
                  Śledzimy najnowsze trendy w branży i nieustannie rozwijamy nasze umiejętności, aby oferować naszym klientom innowacyjne rozwiązania.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-darkCard p-6 rounded-lg border border-gray-800"
              >
                <div className="text-orange text-2xl font-bold mb-4">06</div>
                <h3 className="text-white text-xl font-semibold mb-3">Transparentność</h3>
                <p className="text-gray-300">
                  Dbamy o jasną i przejrzystą komunikację z naszymi klientami. Zawsze informujemy o postępach w realizacji projektu i możliwych opcjach.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        <TeamSection />
        <CTA />
      </main>
    </>
  );
};

export default About;
