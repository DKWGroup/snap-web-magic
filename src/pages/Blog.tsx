
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import CTA from '@/components/CTA';

const blogPosts = [
  {
    id: 1,
    title: 'Dlaczego Twoja firma potrzebuje profesjonalnej strony internetowej?',
    excerpt: 'W dzisiejszym cyfrowym świecie posiadanie profesjonalnej strony internetowej to nie luksus, ale konieczność dla każdej firmy.',
    date: '18.04.2023',
    image: '/images/blog-1.jpg',
    category: 'WWW',
    featured: true
  },
  {
    id: 2,
    title: 'Jak wykorzystać social media do budowania marki osobistej?',
    excerpt: 'Social media to potężne narzędzie dla przedsiębiorców i specjalistów, którzy chcą budować swoją markę osobistą i docierać do nowych klientów.',
    date: '25.03.2023',
    image: '/images/blog-2.jpg',
    category: 'Social Media'
  },
  {
    id: 3,
    title: '10 zasad skutecznego video marketingu w 2023 roku',
    excerpt: 'Video marketing to jeden z najskuteczniejszych kanałów komunikacji z odbiorcami. Poznaj 10 zasad, które pomogą Ci tworzyć angażujące treści wideo.',
    date: '10.03.2023',
    image: '/images/blog-3.jpg',
    category: 'Video Marketing'
  },
  {
    id: 4,
    title: 'Jak przygotować się do nagrania podcastu?',
    excerpt: 'Podcasty zyskują coraz większą popularność. Dowiedz się, jak przygotować się do nagrania, aby Twój podcast brzmiał profesjonalnie.',
    date: '02.03.2023',
    image: '/images/blog-4.jpg',
    category: 'Podcasty'
  },
  {
    id: 5,
    title: 'Trendy w produkcji wideo na 2023 rok',
    excerpt: 'Poznaj najnowsze trendy w produkcji wideo, które będą dominować w 2023 roku, i dowiedz się, jak możesz je wykorzystać w swoim biznesie.',
    date: '15.02.2023',
    image: '/images/blog-5.jpg',
    category: 'Trendy'
  },
  {
    id: 6,
    title: 'Jak tworzyć angażujące treści na YouTube?',
    excerpt: 'YouTube to druga największa wyszukiwarka na świecie. Odkryj strategie tworzenia angażujących treści, które przyciągną i zatrzymają widzów.',
    date: '01.02.2023',
    image: '/images/blog-6.jpg',
    category: 'YouTube'
  }
];

const Blog = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
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
              Marketing, strony internetowe i wideo – <span className="text-orange">Blog</span> DKW Group
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Najnowsze trendy, porady i case studies z dziedziny marketingu, wideo i stron internetowych.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-darkBg">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:flex-row gap-10 items-center"
            >
              <div className="lg:w-7/12">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover aspect-[16/9]"
                  />
                </div>
              </div>
              <div className="lg:w-5/12">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="bg-orange/20 text-orange px-3 py-1 rounded-full text-xs font-medium">
                      FEATURED
                    </span>
                    <span className="text-orange text-sm">{featuredPost.category}</span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-300">{featuredPost.excerpt}</p>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center text-orange hover:text-orange-light transition-colors group"
                  >
                    <span>CZYTAJ WIĘCEJ</span>
                    <ArrowRight
                      size={16}
                      className="ml-2 transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="py-20 bg-darkBg">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {regularPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="bg-darkCard rounded-lg overflow-hidden flex flex-col h-full"
              >
                <div className="aspect-[16/9] relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-orange text-sm">{post.category}</span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-grow">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-orange hover:text-orange-light transition-colors group mt-auto"
                  >
                    <span>CZYTAJ WIĘCEJ</span>
                    <ArrowRight
                      size={16}
                      className="ml-2 transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default Blog;
