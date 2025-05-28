
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon, ExternalLink, ChevronLeft, ChevronRight, Target, AlertTriangle, Cog, TrendingUp, Quote, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  content: string;
  image_url: string | null;
  client: string;
  industry: string;
  published_at: string;
  slug: string;
  youtube_url: string | null;
  gallery_images: string[] | null;
}

interface CaseStudyContent {
  project_summary: string;
  process: string;
  results: string;
  conclusions: string;
  final_summary: string;
}

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      if (!slug) return;

      try {
        setIsLoading(true);
        console.log('Fetching case study with slug:', slug);
        
        // Try to fetch by slug first
        let { data, error } = await supabase
          .from('case_studies')
          .select('*')
          .eq('slug', slug)
          .maybeSingle();

        console.log('First query result (by slug):', { data, error });

        if (!data && !error) {
          console.log('No data found by slug, trying by id...');
          // If not found by slug, try by id
          const result = await supabase
            .from('case_studies')
            .select('*')
            .eq('id', slug)
            .maybeSingle();
          
          data = result.data;
          error = result.error;
          console.log('Second query result (by id):', { data, error });
        }

        if (error) {
          console.error('Supabase error:', error);
          throw error;
        }

        if (!data) {
          console.log('No case study found for:', slug);
          navigate('/case-studies');
          toast.error('Case study nie zostało znalezione');
          return;
        }

        console.log('Found case study:', data);
        setCaseStudy(data);
      } catch (error) {
        console.error('Error fetching case study:', error);
        toast.error('Wystąpił błąd podczas wczytywania case study');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaseStudy();
  }, [slug, navigate]);

  // Function to parse content and return structured sections
  const parseContent = (content: string): CaseStudyContent => {
    try {
      const parsedContent = JSON.parse(content);
      if (typeof parsedContent === 'object' && parsedContent !== null) {
        return {
          project_summary: parsedContent.project_summary || '',
          process: parsedContent.process || '',
          results: parsedContent.results || '',
          conclusions: parsedContent.conclusions || '',
          final_summary: parsedContent.final_summary || ''
        };
      }
    } catch {
      // If parsing fails, treat as legacy string content
      console.log('Legacy content format detected, using project_summary');
    }
    
    // Fallback for legacy content
    return {
      project_summary: content,
      process: '',
      results: '',
      conclusions: '',
      final_summary: ''
    };
  };

  // Function to convert markdown-like text to HTML-like formatting
  const formatContent = (content: string) => {
    if (!content) return null;
    
    const lines = content.split('\n');
    return lines.map((line, index) => {
      // Handle headers
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold mt-6 mb-3">{line.substring(4)}</h3>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{line.substring(3)}</h2>;
      }
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.substring(2)}</h1>;
      }
      
      // Handle blockquotes
      if (line.startsWith('> ')) {
        return <blockquote key={index} className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">{line.substring(2)}</blockquote>;
      }
      
      // Handle lists
      if (line.match(/^\d+\. /)) {
        return <li key={index} className="ml-4 my-1">{line.replace(/^\d+\. /, '')}</li>;
      }
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-4 my-1 list-disc">{line.substring(2)}</li>;
      }
      
      // Handle regular paragraphs with inline formatting
      if (line.trim()) {
        let formattedLine = line;
        
        // Bold text
        formattedLine = formattedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        // Italic text
        formattedLine = formattedLine.replace(/\*(.*?)\*/g, '<em>$1</em>');
        
        // Inline code
        formattedLine = formattedLine.replace(/`(.*?)`/g, '<code class="bg-muted px-1 py-0.5 rounded text-sm">$1</code>');
        
        return (
          <p 
            key={index} 
            className="mb-4 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formattedLine }}
          />
        );
      }
      
      return <br key={index} />;
    });
  };

  const nextGalleryImage = () => {
    if (caseStudy?.gallery_images) {
      setCurrentGalleryIndex((prev) => 
        prev === caseStudy.gallery_images!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevGalleryImage = () => {
    if (caseStudy?.gallery_images) {
      setCurrentGalleryIndex((prev) => 
        prev === 0 ? caseStudy.gallery_images!.length - 1 : prev - 1
      );
    }
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

  const sections = parseContent(caseStudy.content);

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

      {/* Summary Section */}
      <Card className="mb-10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            Podsumowanie projektu
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-lg leading-relaxed">{caseStudy.summary}</p>
        </CardContent>
      </Card>

      {/* Project Summary Section */}
      {sections.project_summary && (
        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600" />
              Wprowadzenie i cel projektu
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              {formatContent(sections.project_summary)}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Process Section */}
      {sections.process && (
        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cog className="h-5 w-5 text-purple-600" />
              Proces realizacji
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              {formatContent(sections.process)}
            </div>
          </CardContent>
        </Card>
      )}

      {/* YouTube Video Section */}
      {caseStudy.youtube_url && (
        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5 text-red-600" />
              Portfolio realizacji
            </CardTitle>
          </CardHeader>
          <CardContent>
            <a 
              href={caseStudy.youtube_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-lg"
            >
              <ExternalLink size={20} />
              <span>Zobacz film na YouTube</span>
            </a>
          </CardContent>
        </Card>
      )}

      {/* Results Section */}
      {sections.results && (
        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Wyniki
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              {formatContent(sections.results)}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Gallery Section */}
      {caseStudy.gallery_images && caseStudy.gallery_images.length > 0 && (
        <Card className="mb-10">
          <CardHeader>
            <CardTitle>Galeria zdjęć</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                <img
                  src={caseStudy.gallery_images[currentGalleryIndex]}
                  alt={`Gallery image ${currentGalleryIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {caseStudy.gallery_images.length > 1 && (
                <>
                  <button
                    onClick={prevGalleryImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextGalleryImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                  
                  <div className="flex justify-center gap-2 mt-4">
                    {caseStudy.gallery_images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentGalleryIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentGalleryIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
              
              <div className="grid grid-cols-4 md:grid-cols-6 gap-2 mt-4">
                {caseStudy.gallery_images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentGalleryIndex(index)}
                    className={`aspect-square overflow-hidden rounded border-2 transition-colors ${
                      index === currentGalleryIndex ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Conclusions Section */}
      {sections.conclusions && (
        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Quote className="h-5 w-5 text-indigo-600" />
              Wnioski
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 p-6 rounded-lg">
              <div className="prose prose-lg max-w-none">
                {formatContent(sections.conclusions)}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Final Summary Section */}
      {sections.final_summary && (
        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Podsumowanie
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              {formatContent(sections.final_summary)}
            </div>
          </CardContent>
        </Card>
      )}

      {/* CTA Section */}
      <Card className="bg-primary/10 border-primary/20">
        <CardContent className="pt-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Potrzebujesz podobnego rozwiązania?</h3>
          <p className="text-lg mb-6 text-muted-foreground">
            Skontaktuj się z nami, aby omówić Twój projekt i poznać nasze możliwości.
          </p>
          <Button size="lg" onClick={() => navigate('/contact')}>
            Skontaktuj się z nami
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CaseStudyDetail;
