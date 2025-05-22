
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTA from '@/components/CTA';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

// This data would ideally come from a database
const caseStudiesData = {
  'kokpit-kamila': {
    title: 'Obsługa Kanału YouTube dla Eksperta Lotniczego',
    client: 'Kokpit Kamila',
    category: 'YouTube Management',
    thumbnailImage: '/images/project-1.jpg',
    heroImage: '/images/project-1.jpg', // We would use a different image in a real scenario
    description: 'Stworzyliśmy kanał "Kokpit Kamila", który zgromadził 3 mln wyświetleń, budując silną markę ekspercką Kamila Majdy w branży lotniczej.',
    challenge: 'Wyzwaniem było stworzenie profesjonalnego kanału YouTube z treściami eksperckim z branży lotniczej, który przyciągnie specjalistyczną grupę odbiorców i zbuduje pozycję eksperta dla prowadzącego.',
    solution: 'Opracowaliśmy kompleksową strategię zawartości kanału, plan publikacji oraz format materiałów. Zajęliśmy się całościową produkcją - od nagrań, przez montaż, po publikację i optymalizację treści pod kątem algorytmów YouTube.',
    results: [
      '3 miliony łącznych wyświetleń na kanale',
      'Ponad 30 000 subskrybentów',
      'Średni czas oglądania powyżej 8 minut',
      'Zbudowanie rozpoznawalnej marki eksperckiej',
      'Kontrakty reklamowe z firmami z branży lotniczej'
    ],
    testimonial: {
      content: 'Dzięki współpracy z DKW Group mój kanał osiągnął wyniki, o których nawet nie marzyłem. Profesjonalizm i zaangażowanie zespołu sprawiły, że mogłem skupić się na merytoryce, podczas gdy oni zajęli się całą produkcją i strategią.',
      author: 'Kamil Majda',
      position: 'Pilot, twórca kanału Kokpit Kamila'
    },
    gallery: [
      '/images/portfolio-1.jpg',
      '/images/portfolio-2.jpg',
      '/images/portfolio-3.jpg'
    ],
    stats: [
      { value: '3 000 000+', label: 'wyświetleń na YouTube' },
      { value: '30 000+', label: 'subskrybentów' },
      { value: '8+ min', label: 'średni czas oglądania' },
      { value: '150+', label: 'materiałów wideo' }
    ]
  },
  'investment-partners': {
    title: 'Kampania Reklamowa dla Investment Partners',
    client: 'Investment Partners',
    category: 'Video Marketing',
    thumbnailImage: '/images/project-2.jpg',
    heroImage: '/images/project-2.jpg',
    description: 'Stworzyliśmy spot reklamowy dla "Metamorfozy Finansowej", osiągając 30,000+ wyświetleń i setki rejestracji, zwiększając zasięg Investment Partners.',
    challenge: 'Investment Partners potrzebowało efektywnej kampanii wideo, która przyciągnęłaby nowych klientów do ich programu "Metamorfoza Finansowa" i zwiększyła rozpoznawalność ich marki.',
    solution: 'Zaprojektowaliśmy i wyprodukowaliśmy profesjonalny spot reklamowy, który w przekonujący sposób prezentował wartości programu. Opracowaliśmy również strategię dystrybucji treści w mediach społecznościowych.',
    results: [
      'Ponad 30 000 wyświetleń spotu reklamowego',
      'Setki rejestracji do programu "Metamorfoza Finansowa"',
      'Wzrost świadomości marki o 45% w grupie docelowej',
      'ROI kampanii na poziomie 380%',
      'Zwiększenie ruchu na stronie internetowej o 150%'
    ],
    testimonial: {
      content: 'Kampania przygotowana przez DKW Group znacząco przewyższyła nasze oczekiwania. Jakość produkcji, strategiczne podejście i efekty biznesowe sprawiły, że nasza współpraca rozwija się przy kolejnych projektach.',
      author: 'Jan Kowalski',
      position: 'CEO, Investment Partners'
    },
    gallery: [
      '/images/portfolio-4.jpg',
      '/images/portfolio-5.jpg',
      '/images/portfolio-6.jpg'
    ],
    stats: [
      { value: '30 000+', label: 'wyświetleń kampanii' },
      { value: 'Setki', label: 'nowych rejestracji' },
      { value: '380%', label: 'zwrot z inwestycji' },
      { value: '+150%', label: 'wzrost ruchu na stronie' }
    ]
  },
  'grzegorz-kusz': {
    title: 'Obsługa Kanału Grzegorz Kusz - Agent Specjalny',
    client: 'Grzegorz Kusz',
    category: 'Content Creation',
    thumbnailImage: '/images/project-3.jpg',
    heroImage: '/images/project-3.jpg',
    description: 'Kompleksowa obsługa kanału – od nagrań po publikację, budowanie zaangażowanej społeczności i tworzenie wartościowych treści.',
    challenge: 'Grzegorz Kusz potrzebował profesjonalnego wsparcia w prowadzeniu swojego kanału YouTube, aby mógł skupić się na merytoryce swoich treści, zachowując wysoką jakość produkcji i regularność publikacji.',
    solution: 'Zapewniliśmy kompleksową obsługę kanału, zajmując się nagraniami, montażem, postprodukcją, optymalizacją treści i strategią publikacji. Wprowadziliśmy również nowe formaty contentowe i strategie budowania społeczności.',
    results: [
      '5 lat nieprzerwanej współpracy',
      'Wzrost z 50 000 do ponad 400 000 subskrybentów',
      'Średnio 150 000 wyświetleń na materiał',
      'Wysokie zaangażowanie widzów (komentarze, udostępnienia)',
      'Rozwój dodatkowych kanałów przychodów (sponsorzy, merchandise)'
    ],
    testimonial: {
      content: 'DKW Group to nie tylko wykonawcy, ale prawdziwi partnerzy w tworzeniu contentu. Dzięki ich wsparciu mój kanał stał się profesjonalną platformą, a ja mogę w pełni skupić się na przygotowaniu wartościowych treści dla moich widzów.',
      author: 'Grzegorz Kusz',
      position: 'Twórca kanału "Agent Specjalny"'
    },
    gallery: [
      '/images/portfolio-7.jpg',
      '/images/portfolio-8.jpg',
      '/images/portfolio-9.jpg'
    ],
    stats: [
      { value: '5 lat', label: 'współpracy' },
      { value: '+400k', label: 'subskrypcji' },
      { value: '150k', label: 'średnia wyświetleń' },
      { value: '1000+', label: 'opublikowanych materiałów' }
    ]
  }
};

const CaseStudyDetail = () => {
  const { caseId } = useParams();
  const caseStudy = caseStudiesData[caseId as keyof typeof caseStudiesData];
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Handle non-existent case study
    if (!caseStudy && caseId) {
      console.error(`Case study with ID ${caseId} not found`);
    }
  }, [caseId, caseStudy]);

  if (!caseStudy) {
    return (
      <main className="bg-darkBg min-h-screen pt-32">
        <div className="container text-center py-20">
          <h1 className="text-3xl font-bold text-white mb-6">
            Nie znaleziono case study
          </h1>
          <p className="text-gray-300 mb-8">
            Przepraszamy, ale szukane case study nie istnieje.
          </p>
          <Link to="/case-studies">
            <Button variant="default" className="bg-orange">
              <ArrowLeft size={16} className="mr-2" />
              Wróć do listy realizacji
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-darkBg min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-darkBg">
        <div className="container">
          <Link to="/case-studies" className="inline-flex items-center text-gray-400 hover:text-orange mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Wróć do wszystkich case studies
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-sm font-semibold text-orange mb-4 uppercase tracking-wider">
                {caseStudy.category}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {caseStudy.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                {caseStudy.description}
              </p>
              <p className="text-gray-400 text-lg">
                Klient: <span className="text-white">{caseStudy.client}</span>
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-lg overflow-hidden"
            >
              <img 
                src={caseStudy.heroImage} 
                alt={caseStudy.title} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 bg-darkBg border-t border-b border-gray-800">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {caseStudy.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-orange text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Challenge & Solution Section */}
      <section className="py-20 bg-darkBg">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-darkCard p-8 rounded-lg border border-gray-800"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Wyzwanie</h2>
              <p className="text-gray-300">{caseStudy.challenge}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-darkCard p-8 rounded-lg border border-gray-800"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Rozwiązanie</h2>
              <p className="text-gray-300">{caseStudy.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-20 bg-darkBg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Rezultaty</h2>
            <ul className="space-y-4 text-left">
              {caseStudy.results.map((result, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="inline-block w-5 h-5 mr-3 mt-1 rounded-full bg-orange/20 border border-orange flex-shrink-0"></span>
                  <span className="text-gray-300 text-lg">{result}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 bg-darkBg border-t border-b border-gray-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="text-5xl text-orange mb-6">"</div>
            <p className="text-xl md:text-2xl text-white mb-8 italic">
              {caseStudy.testimonial.content}
            </p>
            <div className="text-lg font-semibold text-white">
              {caseStudy.testimonial.author}
            </div>
            <div className="text-gray-400">
              {caseStudy.testimonial.position}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-20 bg-darkBg">
        <div className="container">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Galeria</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudy.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="rounded-lg overflow-hidden"
              >
                <img 
                  src={image} 
                  alt={`Galeria projektu ${caseStudy.title} - zdjęcie ${index + 1}`} 
                  className="w-full h-full object-cover aspect-video"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <CTA />
    </main>
  );
};

export default CaseStudyDetail;
