
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

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

const CaseStudyDetail = () => {
  const { caseId } = useParams<{ caseId: string }>();
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      if (!caseId) return;

      try {
        setIsLoading(true);
        
        // Try to fetch by slug first, then by id if not found
        let { data, error } = await supabase
          .from('case_studies')
          .select('*')
          .eq('slug', caseId)
          .maybeSingle();

        if (!data && !error) {
          // If not found by slug, try by id
          const result = await supabase
            .from('case_studies')
            .select('*')
            .eq('id', caseId)
            .maybeSingle();
          
          data = result.data;
          error = result.error;
        }

        if (error) {
          throw error;
        }

        if (!data) {
          navigate('/case-studies');
          toast.error('Case study nie zostało znalezione');
          return;
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

  // Function to convert markdown-like text to HTML-like formatting
  const formatContent = (content: string) => {
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
      
      // Handle code blocks
      if (line.startsWith('```')) {
        return null; // Handle in a more complex way if needed
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

      {caseStudy.youtube_url && (
        <div className="mb-10">
          <h3 className="text-lg font-medium mb-4">Portfolio realizacji</h3>
          <div className="bg-muted p-4 rounded-lg">
            <a 
              href={caseStudy.youtube_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink size={20} />
              <span>Zobacz film na YouTube</span>
            </a>
          </div>
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

      {caseStudy.gallery_images && caseStudy.gallery_images.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Galeria zdjęć</h3>
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
        </div>
      )}
    </div>
  );
};

export default CaseStudyDetail;
