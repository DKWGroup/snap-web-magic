
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  author: string;
  published_at: string;
  sources?: string[];
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          throw error;
        }

        setPost(data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
        toast.error('Wystąpił błąd podczas wczytywania postu');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (isLoading) {
    return (
      <div className="container py-12 max-w-4xl">
        <div className="mb-6">
          <Skeleton className="h-4 w-24 mb-4" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-64 w-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container py-12 max-w-4xl">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post nie został znaleziony</h1>
          <Link to="/blog">
            <Button>Powrót do bloga</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12 max-w-4xl">
      <div className="mb-6">
        <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
          <ArrowLeft size={16} />
          Powrót do bloga
        </Link>
      </div>

      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <div className="text-muted-foreground">
            {format(new Date(post.published_at), 'dd.MM.yyyy')} • {post.author}
          </div>
        </header>

        {post.image_url && (
          <div className="aspect-[16/9] overflow-hidden rounded-lg">
            <img
              src={post.image_url}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="prose prose-slate max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
              h2: ({ children }) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
              h3: ({ children }) => <h3 className="text-xl font-bold mt-5 mb-2">{children}</h3>,
              p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
              ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>,
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">
                  {children}
                </blockquote>
              ),
              code: ({ children }) => (
                <code className="bg-muted px-1 py-0.5 rounded text-sm font-mono">{children}</code>
              ),
              pre: ({ children }) => (
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-4">{children}</pre>
              ),
              a: ({ href, children }) => (
                <a href={href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              ),
              strong: ({ children }) => <strong className="font-bold">{children}</strong>,
              em: ({ children }) => <em className="italic">{children}</em>,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {post.sources && post.sources.length > 0 && (
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Źródła</h3>
              <ul className="space-y-2">
                {post.sources.map((source, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ExternalLink size={16} className="mt-0.5 text-muted-foreground flex-shrink-0" />
                    <a
                      href={source.startsWith('http') ? source : `https://${source}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline break-all"
                    >
                      {source}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </article>
    </div>
  );
};

export default BlogPost;
