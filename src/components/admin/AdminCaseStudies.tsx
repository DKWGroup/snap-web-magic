import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import CaseStudyForm from './CaseStudyForm';

interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  content: string;
  image_url: string | null;
  client: string;
  industry: string;
  published_at: string;
  created_at: string;
  slug: string;
  youtube_url: string | null;
  gallery_images: string[] | null;
}

const AdminCaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [currentCaseStudy, setCurrentCaseStudy] = useState<CaseStudy | null>(null);

  const fetchCaseStudies = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setCaseStudies(data || []);
    } catch (error) {
      console.error('Error fetching case studies:', error);
      toast.error('Wystąpił błąd podczas pobierania case studies');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const handleAddNew = () => {
    setCurrentCaseStudy(null);
    setIsOpen(true);
  };

  const handleEdit = (caseStudy: CaseStudy) => {
    setCurrentCaseStudy(caseStudy);
    setIsOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Czy na pewno chcesz usunąć to case study?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('case_studies')
        .delete()
        .eq('id', id);

      if (error) {
        throw error;
      }

      toast.success('Case study zostało usunięte');
      fetchCaseStudies();
    } catch (error) {
      console.error('Error deleting case study:', error);
      toast.error('Wystąpił błąd podczas usuwania case study');
    }
  };

  const handleFormClose = (refreshData: boolean) => {
    setIsOpen(false);
    if (refreshData) {
      fetchCaseStudies();
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Case Studies</h2>
        <Button onClick={handleAddNew}>Dodaj Nowe Case Study</Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : caseStudies.length === 0 ? (
        <div className="text-center py-8 border rounded-md bg-muted/20">
          <p className="text-muted-foreground">Brak case studies do wyświetlenia</p>
        </div>
      ) : (
        <div className="border rounded-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tytuł</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Klient</TableHead>
                <TableHead>Branża</TableHead>
                <TableHead>YouTube</TableHead>
                <TableHead className="text-right">Akcje</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {caseStudies.map((caseStudy) => (
                <TableRow key={caseStudy.id}>
                  <TableCell className="font-medium">{caseStudy.title}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{caseStudy.slug}</TableCell>
                  <TableCell>{caseStudy.client}</TableCell>
                  <TableCell>{caseStudy.industry}</TableCell>
                  <TableCell>
                    {caseStudy.youtube_url ? (
                      <a 
                        href={caseStudy.youtube_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80"
                      >
                        YouTube
                      </a>
                    ) : (
                      <span className="text-muted-foreground">Brak</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(caseStudy)}>
                      Edytuj
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(caseStudy.id)}>
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
              {currentCaseStudy ? 'Edytuj case study' : 'Dodaj nowe case study'}
            </SheetTitle>
            <SheetDescription>
              Wypełnij formularz, aby {currentCaseStudy ? 'zaktualizować' : 'dodać'} case study.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <CaseStudyForm 
              caseStudy={currentCaseStudy} 
              onClose={handleFormClose} 
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminCaseStudies;
