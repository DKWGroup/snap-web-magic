
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  content: string;
  image_url: string | null;
  client: string;
  industry: string;
  published_at: string;
}

const CaseStudyDetail = () => {
  const { caseId } = useParams<{ caseId: string }>();
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      if (!caseId) return;

      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('case_studies')
          .select('*')
          .eq('id', caseId)
          .single();

        if (error) {
          if (error.code === 'PGRST116') {
            navigate('/case-studies');
            toast.error('Case study nie zostało znalezione');
            return;
          }
          throw error;
        }

        setCaseStudy(data);
      } catch (error) {
        console.error('Error fetching case study:', error);
        toast.error('Wystąpił błąd podczas wczytywania case study');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaseStudy();
  }, [caseId, navigate]);

  // Function to convert plain text to paragraphs for better readability
  const formatContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => (
      paragraph.trim() ? <p key={index} className="mb-4">{paragraph}</p> : <br key={index} />
    ));
  };

  if (isLoading) {
    return (
      <div className="container py-12 max-w-4xl">
        <div className="mb-6">
          <Skeleton className="h-8 w-32" />
        </div>
        <Skeleton className="h-12 w-3/4 mb-4" />
        <Skeleton className="h-6 w-1/2 mb-10" />
        <div className="aspect-video mb-10">
          <Skeleton className="h-full w-full" />
        </div>
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-6 w-full mb-3" />
        ))}
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="container py-12 max-w-4xl text-center">
        <h2 className="text-2xl font-bold mb-4">Nie znaleziono case study</h2>
        <p className="mb-6 text-muted-foreground">
          Przepraszamy, ale nie mogliśmy znaleźć szukanego case study.
        </p>
        <Button onClick={() => navigate('/case-studies')}>
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Powrót do listy
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-12 max-w-4xl">
      <div className="mb-6">
        <Button variant="outline" onClick={() => navigate('/case-studies')}>
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Powrót do listy
        </Button>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">{caseStudy.title}</h1>
      <div className="flex items-center gap-3 text-muted-foreground mb-10">
        <span className="font-medium">{caseStudy.client}</span>
        <span>•</span>
        <span>{caseStudy.industry}</span>
      </div>

      {caseStudy.image_url && (
        <div className="mb-10">
          <img
            src={caseStudy.image_url}
            alt={caseStudy.title}
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>
      )}

      <div className="prose prose-lg max-w-none">
        <div className="bg-muted p-6 rounded-lg mb-10">
          <h3 className="text-lg font-medium mb-3">Podsumowanie</h3>
          <p className="text-muted-foreground">{caseStudy.summary}</p>
        </div>

        <div className="text-lg leading-relaxed">
          {formatContent(caseStudy.content)}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
