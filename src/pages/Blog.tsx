
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  author: string;
  published_at: string;
  created_at: string;
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .order('published_at', { ascending: false });

        if (error) {
          throw error;
        }

        setBlogPosts(data || []);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        toast.error('Wystąpił błąd podczas wczytywania postów');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const renderContent = (content: string) => {
    // Limit content to ~200 characters and add ellipsis
    return content.length > 200 ? `${content.substring(0, 200)}...` : content;
  };

  return (
    <div className="container py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Najnowsze wpisy, artykuły i porady dotyczące marketingu i strategii biznesowych.
        </p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="overflow-hidden flex flex-col">
              <div className="aspect-video">
                <Skeleton className="h-full w-full" />
              </div>
              <CardHeader>
                <Skeleton className="h-6 w-full max-w-[240px]" />
                <Skeleton className="h-4 w-[180px]" />
              </CardHeader>
              <CardContent className="grow">
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : blogPosts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">Brak wpisów na blogu</h3>
          <p className="text-muted-foreground">Nowe wpisy pojawią się wkrótce.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden flex flex-col">
              {post.image_url && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription>
                  {format(new Date(post.published_at), 'dd.MM.yyyy')} • {post.author}
                </CardDescription>
              </CardHeader>
              <CardContent className="grow">
                <p className="text-muted-foreground">
                  {renderContent(post.content)}
                </p>
              </CardContent>
              <CardFooter>
                <a 
                  href={`/blog/${post.id}`} 
                  className="text-primary font-medium hover:underline"
                >
                  Czytaj więcej →
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
