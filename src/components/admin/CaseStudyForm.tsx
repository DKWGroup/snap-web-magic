import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';
import { X, Image as ImageIcon } from 'lucide-react';
import { optimizeImage, optimizeImageForGallery } from '@/utils/imageOptimization';

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

interface CaseStudyFormProps {
  caseStudy: CaseStudy | null;
  onClose: (refreshData: boolean) => void;
}

const CaseStudyForm = ({ caseStudy, onClose }: CaseStudyFormProps) => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [client, setClient] = useState('');
  const [industry, setIndustry] = useState('');
  const [slug, setSlug] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (caseStudy) {
      setTitle(caseStudy.title);
      setSummary(caseStudy.summary);
      setContent(caseStudy.content);
      setImageUrl(caseStudy.image_url || '');
      setClient(caseStudy.client);
      setIndustry(caseStudy.industry);
      setSlug(caseStudy.slug);
      setYoutubeUrl(caseStudy.youtube_url || '');
      setGalleryImages(caseStudy.gallery_images || []);
    }
  }, [caseStudy]);

  // Auto-generate slug from title
  useEffect(() => {
    if (title && !caseStudy) {
      const generatedSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-')
        .trim();
      setSlug(generatedSlug);
    }
  }, [title, caseStudy]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    try {
      setIsUploading(true);
      const file = e.target.files[0];
      
      // Optimize image before upload
      toast.info('Optymalizowanie obrazu...');
      const optimizedFile = await optimizeImage(file, {
        maxWidth: 1920,
        maxHeight: 1080,
        quality: 0.85,
        format: 'webp'
      });
      
      const fileExt = 'webp'; // Always use webp after optimization
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `case-studies/${fileName}`;

      const { data: bucketData, error: bucketError } = await supabase
        .storage
        .getBucket('media');
      
      if (bucketError && bucketError.message.includes('The resource was not found')) {
        await supabase.storage.createBucket('media', {
          public: true
        });
      }

      const { error } = await supabase
        .storage
        .from('media')
        .upload(filePath, optimizedFile);

      if (error) {
        throw error;
      }

      const { data } = supabase
        .storage
        .from('media')
        .getPublicUrl(filePath);

      setImageUrl(data.publicUrl);
      toast.success('Zdjęcie zostało zoptymalizowane i przesłane');
    } catch (error: any) {
      console.error('Error uploading image:', error);
      toast.error(`Błąd podczas przesyłania zdjęcia: ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    try {
      setIsUploading(true);
      const files = Array.from(e.target.files);
      
      toast.info(`Optymalizowanie ${files.length} obrazów...`);
      
      const uploadPromises = files.map(async (file) => {
        // Optimize each image for gallery
        const optimizedFile = await optimizeImageForGallery(file);
        
        const fileExt = 'webp'; // Always use webp after optimization
        const fileName = `${uuidv4()}.${fileExt}`;
        const filePath = `case-studies/gallery/${fileName}`;

        const { error } = await supabase
          .storage
          .from('media')
          .upload(filePath, optimizedFile);

        if (error) {
          throw error;
        }

        const { data } = supabase
          .storage
          .from('media')
          .getPublicUrl(filePath);

        return data.publicUrl;
      });

      const uploadedUrls = await Promise.all(uploadPromises);
      setGalleryImages([...galleryImages, ...uploadedUrls]);
      toast.success('Zdjęcia zostały zoptymalizowane i przesłane do galerii');
    } catch (error: any) {
      console.error('Error uploading gallery images:', error);
      toast.error(`Błąd podczas przesyłania zdjęć: ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  const removeGalleryImage = (index: number) => {
    const newGallery = galleryImages.filter((_, i) => i !== index);
    setGalleryImages(newGallery);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const caseStudyData = {
        title,
        summary,
        content,
        image_url: imageUrl || null,
        client,
        industry,
        slug,
        youtube_url: youtubeUrl || null,
        gallery_images: galleryImages.length > 0 ? galleryImages : null
      };

      let result;
      
      if (caseStudy) {
        result = await supabase
          .from('case_studies')
          .update(caseStudyData)
          .eq('id', caseStudy.id);
      } else {
        result = await supabase
          .from('case_studies')
          .insert([caseStudyData]);
      }

      if (result.error) {
        throw result.error;
      }

      toast.success(caseStudy ? 'Case study zostało zaktualizowane' : 'Case study zostało dodane');
      onClose(true);
    } catch (error: any) {
      console.error('Error saving case study:', error);
      toast.error(`Błąd podczas zapisywania case study: ${error.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="title" className="block text-sm font-medium">
          Tytuł
        </label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="slug" className="block text-sm font-medium">
          Slug URL
        </label>
        <Input
          id="slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="url-slug-for-case-study"
          required
        />
        <p className="text-xs text-muted-foreground">
          URL będzie wyglądać tak: /case-studies/{slug}
        </p>
      </div>

      <div className="space-y-2">
        <label htmlFor="client" className="block text-sm font-medium">
          Klient
        </label>
        <Input
          id="client"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="industry" className="block text-sm font-medium">
          Branża
        </label>
        <Input
          id="industry"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="summary" className="block text-sm font-medium">
          Podsumowanie
        </label>
        <textarea
          id="summary"
          className="flex h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="content" className="block text-sm font-medium">
          Treść (wspiera formatowanie Markdown)
        </label>
        <textarea
          id="content"
          className="flex h-60 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Możesz używać formatowania Markdown:&#10;&#10;# Nagłówek 1&#10;## Nagłówek 2&#10;### Nagłówek 3&#10;&#10;**Pogrubiony tekst**&#10;*Kursywa*&#10;&#10;- Lista punktowa&#10;- Drugi punkt&#10;&#10;1. Lista numerowana&#10;2. Drugi punkt&#10;&#10;> Cytat&#10;&#10;`kod inline`&#10;&#10;```&#10;blok kodu&#10;```"
          required
        />
        <p className="text-xs text-muted-foreground">
          Użyj formatowania Markdown dla nagłówków, list, pogrubień itp.
        </p>
      </div>

      <div className="space-y-2">
        <label htmlFor="youtube-url" className="block text-sm font-medium">
          Link do filmu YouTube
        </label>
        <Input
          id="youtube-url"
          value={youtubeUrl}
          onChange={(e) => setYoutubeUrl(e.target.value)}
          placeholder="https://www.youtube.com/watch?v=..."
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="image" className="block text-sm font-medium">
          Główne zdjęcie
        </label>
        <div className="flex items-center gap-4">
          <Input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            disabled={isUploading}
          />
          {isUploading && (
            <div className="flex items-center gap-2">
              <div className="animate-spin h-5 w-5 border-b-2 rounded-full border-primary"></div>
              <span className="text-sm text-muted-foreground">Optymalizowanie...</span>
            </div>
          )}
        </div>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <ImageIcon className="h-3 w-3" />
          Obrazy są automatycznie optymalizowane (WebP, maksymalnie 1920x1080px)
        </p>
        {imageUrl && (
          <div className="mt-2">
            <p className="text-sm text-muted-foreground mb-2">Podgląd głównego zdjęcia:</p>
            <img 
              src={imageUrl} 
              alt="Preview" 
              className="max-h-40 rounded border border-border" 
            />
          </div>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="gallery" className="block text-sm font-medium">
          Galeria zdjęć
        </label>
        <div className="flex items-center gap-4">
          <Input
            id="gallery-upload"
            type="file"
            accept="image/*"
            multiple
            onChange={handleGalleryUpload}
            disabled={isUploading}
          />
          {isUploading && (
            <div className="flex items-center gap-2">
              <div className="animate-spin h-5 w-5 border-b-2 rounded-full border-primary"></div>
              <span className="text-sm text-muted-foreground">Optymalizowanie...</span>
            </div>
          )}
        </div>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <ImageIcon className="h-3 w-3" />
          Obrazy galerii są automatycznie optymalizowane (WebP, maksymalnie 1200x800px)
        </p>
        {galleryImages.length > 0 && (
          <div className="mt-4">
            <p className="text-sm text-muted-foreground mb-2">Galeria zdjęć:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((url, index) => (
                <div key={index} className="relative">
                  <img 
                    src={url} 
                    alt={`Gallery ${index + 1}`} 
                    className="w-full h-24 object-cover rounded border border-border" 
                  />
                  <button
                    type="button"
                    onClick={() => removeGalleryImage(index)}
                    className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button type="button" variant="outline" onClick={() => onClose(false)}>
          Anuluj
        </Button>
        <Button type="submit" disabled={isSaving}>
          {isSaving ? 'Zapisywanie...' : caseStudy ? 'Zapisz zmiany' : 'Dodaj case study'}
        </Button>
      </div>
    </form>
  );
};

export default CaseStudyForm;
