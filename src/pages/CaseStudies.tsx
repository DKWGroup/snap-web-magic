import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  content: string;
  image_url: string | null;
  client: string;
  industry: string;
  slug: string;
}

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('case_studies')
          .select('*')
          .order('published_at', { ascending: false });

        if (error) {
          throw error;
        }

        setCaseStudies(data || []);
      } catch (error) {
        console.error('Error fetching case studies:', error);
        toast.error('Wystąpił błąd podczas wczytywania case studies');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  return (
    <div className="container max-w-6xl py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Poznaj nasze wyniki i sprawdź, jak pomogliśmy naszym klientom osiągnąć sukces w ich branżach.
        </p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video">
                <Skeleton className="h-full w-full" />
              </div>
              <CardHeader>
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
              <CardFooter>
                <Skeleton className="h-10 w-32" />
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : caseStudies.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">Brak case studies</h3>
          <p className="text-muted-foreground">Nowe case studies pojawią się wkrótce.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy) => (
            <Card key={caseStudy.id} className="overflow-hidden flex flex-col">
              {caseStudy.image_url && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={caseStudy.image_url}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{caseStudy.title}</CardTitle>
                <CardDescription>
                  <span className="font-medium">{caseStudy.client}</span> • {caseStudy.industry}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{caseStudy.summary}</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link to={`/case-studies/${caseStudy.slug || caseStudy.id}`}>Zobacz szczegóły</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CaseStudies;
