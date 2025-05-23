
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  author: string;
  published_at: string;
}

const BlogPreviewSection = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('blog_posts')
          .select('id, title, content, image_url, author, published_at')
          .order('published_at', { ascending: false })
          .limit(3);

        if (error) {
          console.error('Error fetching blog posts:', error);
          return;
        }

        setBlogPosts(data || []);
      } catch (error) {
        console.error('Error in fetching blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const renderContent = (content: string) => {
    // Limit content to ~100 characters and add ellipsis
    return content.length > 100 ? `${content.substring(0, 100)}...` : content;
  };

  const renderBlogPosts = () => {
    if (isLoading) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <Card key={index} className="bg-darkCard border-gray-800">
              <div className="aspect-[16/9]">
                <Skeleton className="h-full w-full" />
              </div>
              <CardContent className="pt-6">
                <Skeleton className="h-4 w-1/3 mb-2" />
                <Skeleton className="h-6 w-full mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3" />
              </CardContent>
              <CardFooter>
                <Skeleton className="h-10 w-full max-w-[120px]" />
              </CardFooter>
            </Card>
          ))}
        </div>
      );
    }

    if (blogPosts.length === 0) {
      return (
        <div className="text-center py-10 bg-darkCard rounded-lg border border-gray-800">
          <h3 className="text-xl font-medium mb-2 text-white">Brak wpisów na blogu</h3>
          <p className="text-gray-400">Nowe wpisy pojawią się wkrótce.</p>
          <div className="mt-6">
            <Link to="/blog">
              <Button>Przejdź do bloga</Button>
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-darkCard border-gray-800 h-full flex flex-col hover:border-orange/30 transition-colors">
              {post.image_url && (
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <CardContent className="pt-6 flex-grow">
                <div className="text-xs text-gray-400 mb-2">
                  {format(new Date(post.published_at), 'dd.MM.yyyy')} • {post.author}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 line-clamp-3">
                  {renderContent(post.content)}
                </p>
              </CardContent>
              <CardFooter>
                <Link 
                  to={`/blog/${post.id}`}
                  className="text-orange hover:text-orange-400 transition-colors flex items-center gap-2"
                >
                  Czytaj więcej <ArrowRight size={16} />
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-darkBg">
      <div className="container">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Nasz <span className="text-orange">blog</span>
          </h2>
          <Link to="/blog" className="text-orange hover:text-orange-400 transition-colors flex items-center gap-2">
            Zobacz wszystkie wpisy <ArrowRight size={16} />
          </Link>
        </div>

        {renderBlogPosts()}

        <div className="mt-10 text-center">
          <Link to="/blog">
            <Button size="lg" className="bg-orange hover:bg-orange-dark text-white">
              ZOBACZ WIĘCEJ WPISÓW
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
