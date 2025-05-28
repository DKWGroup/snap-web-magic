
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  client: string;
  industry: string;
  image_url: string | null;
  slug: string;
  youtube_url: string | null;
  gallery_images: string[] | null;
}

const CaseStudiesPreviewSection = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('case_studies')
          .select('id, title, summary, client, industry, image_url, slug')
          .order('published_at', { ascending: false })
          .limit(3);

        if (error) {
          console.error('Error fetching case studies:', error);
          return;
        }

        setCaseStudies(data || []);
      } catch (error) {
        console.error('Error in fetching case studies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  const renderCaseStudies = () => {
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
                <Skeleton className="h-10 w-full max-w-[160px]" />
              </CardFooter>
            </Card>
          ))}
        </div>
      );
    }

    if (caseStudies.length === 0) {
      return (
        <div className="text-center py-10 bg-darkCard rounded-lg border border-gray-800">
          <h3 className="text-xl font-medium mb-2 text-white">Brak case studies</h3>
          <p className="text-gray-400">Nowe case studies pojawią się wkrótce.</p>
          <div className="mt-6">
            <Link to="/case-studies">
              <Button>Zobacz wszystkie case studies</Button>
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((caseStudy) => (
          <motion.div
            key={caseStudy.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-darkCard border-gray-800 h-full flex flex-col hover:border-orange/30 transition-colors">
              {caseStudy.image_url && (
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={caseStudy.image_url}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <CardContent className="pt-6 flex-grow">
                <div className="text-xs text-orange font-semibold uppercase mb-2">
                  {caseStudy.client} • {caseStudy.industry}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-300 line-clamp-3">
                  {caseStudy.summary}
                </p>
              </CardContent>
              <CardFooter>
                <Link 
                  to={`/case-studies/${caseStudy.slug || caseStudy.id}`}
                  className="text-orange hover:text-orange-400 transition-colors flex items-center gap-2"
                >
                  Zobacz case study <ArrowRight size={16} />
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
            Case <span className="text-orange">studies</span>
          </h2>
          <Link to="/case-studies" className="text-orange hover:text-orange-400 transition-colors flex items-center gap-2">
            Zobacz wszystkie <ArrowRight size={16} />
          </Link>
        </div>

        {renderCaseStudies()}

        <div className="mt-10 text-center">
          <Link to="/case-studies">
            <Button size="lg" className="bg-orange hover:bg-orange-dark text-white">
              ZOBACZ WIĘCEJ CASE STUDIES
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreviewSection;
