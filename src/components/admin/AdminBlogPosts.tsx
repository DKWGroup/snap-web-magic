
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import BlogPostForm from './BlogPostForm';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  author: string;
  published_at: string;
  created_at: string;
}

const AdminBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);

  const fetchBlogPosts = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setBlogPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      toast.error('Wystąpił błąd podczas pobierania postów bloga');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const handleAddNew = () => {
    setCurrentPost(null);
    setIsOpen(true);
  };

  const handleEdit = (post: BlogPost) => {
    setCurrentPost(post);
    setIsOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Czy na pewno chcesz usunąć ten post?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) {
        throw error;
      }

      toast.success('Post został usunięty');
      fetchBlogPosts();
    } catch (error) {
      console.error('Error deleting blog post:', error);
      toast.error('Wystąpił błąd podczas usuwania postu');
    }
  };

  const handleFormClose = (refreshData: boolean) => {
    setIsOpen(false);
    if (refreshData) {
      fetchBlogPosts();
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Posty Bloga</h2>
        <Button onClick={handleAddNew}>Dodaj Nowy Post</Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : blogPosts.length === 0 ? (
        <div className="text-center py-8 border rounded-md bg-muted/20">
          <p className="text-muted-foreground">Brak postów do wyświetlenia</p>
        </div>
      ) : (
        <div className="border rounded-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tytuł</TableHead>
                <TableHead>Autor</TableHead>
                <TableHead>Data publikacji</TableHead>
                <TableHead className="text-right">Akcje</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {blogPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium">{post.title}</TableCell>
                  <TableCell>{post.author}</TableCell>
                  <TableCell>
                    {format(new Date(post.published_at), 'dd.MM.yyyy')}
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(post)}>
                      Edytuj
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(post.id)}>
                      Usuń
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle>
              {currentPost ? 'Edytuj post bloga' : 'Dodaj nowy post bloga'}
            </SheetTitle>
            <SheetDescription>
              Wypełnij formularz, aby {currentPost ? 'zaktualizować' : 'dodać'} post bloga.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <BlogPostForm 
              post={currentPost} 
              onClose={handleFormClose} 
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminBlogPosts;
