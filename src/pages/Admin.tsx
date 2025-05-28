
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import AdminBlogPosts from '@/components/admin/AdminBlogPosts';
import AdminCaseStudies from '@/components/admin/AdminCaseStudies';

const Admin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
          console.log('No session found, redirecting to login');
          navigate('/admin/login');
          return;
        }

        console.log('Session found, checking admin status for user:', session.user.id);

        const { data: adminUser, error } = await supabase
          .from('admin_users')
          .select('*')
          .eq('id', session.user.id)
          .maybeSingle();

        if (error) {
          console.error('Error checking admin status:', error);
          toast.error('Wystąpił błąd podczas weryfikacji uprawnień');
          return;
        }

        console.log('Admin user data:', adminUser);

        if (!adminUser) {
          console.log('User not found in admin_users table');
          toast.error('Brak uprawnień administratora');
          navigate('/');
          return;
        }

        console.log('Admin verification successful');
        setIsAdmin(true);
      } catch (error) {
        console.error('Error in checkAdminStatus:', error);
        toast.error('Wystąpił błąd podczas weryfikacji uprawnień');
      } finally {
        setIsLoading(false);
      }
    };

    checkAdminStatus();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast.success('Wylogowano pomyślnie');
      navigate('/admin/login');
    } catch (error) {
      console.error('Error logging out:', error);
      toast.error('Wystąpił błąd podczas wylogowywania');
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="container py-8 max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Panel Administratora</h1>
        <Button variant="outline" onClick={handleLogout}>
          Wyloguj się
        </Button>
      </div>

      <Tabs defaultValue="blog" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="blog">Posty Bloga</TabsTrigger>
          <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
        </TabsList>
        
        <TabsContent value="blog" className="space-y-6">
          <AdminBlogPosts />
        </TabsContent>
        
        <TabsContent value="case-studies" className="space-y-6">
          <AdminCaseStudies />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
