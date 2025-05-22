
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';

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
    }
  }, [caseStudy]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    try {
      setIsUploading(true);
      const file = e.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `case-studies/${fileName}`;

      // Create storage bucket if it doesn't exist
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
        .upload(filePath, file);

      if (error) {
        throw error;
      }

      const { data } = supabase
        .storage
        .from('media')
        .getPublicUrl(filePath);

      setImageUrl(data.publicUrl);
      toast.success('Zdjęcie zostało przesłane');
    } catch (error: any) {
      console.error('Error uploading image:', error);
      toast.error(`Błąd podczas przesyłania zdjęcia: ${error.message}`);
    } finally {
      setIsUploading(false);
    }
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
        industry
      };

      let result;
      
      if (caseStudy) {
        // Update existing case study
        result = await supabase
          .from('case_studies')
          .update(caseStudyData)
          .eq('id', caseStudy.id);
      } else {
        // Create new case study
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
          Treść
        </label>
        <textarea
          id="content"
          className="flex h-40 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="image" className="block text-sm font-medium">
          Zdjęcie
        </label>
        <div className="flex items-center gap-4">
          <Input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            disabled={isUploading}
          />
          {isUploading && <div className="animate-spin h-5 w-5 border-b-2 rounded-full border-primary"></div>}
        </div>
        {imageUrl && (
          <div className="mt-2">
            <p className="text-sm text-muted-foreground mb-2">Podgląd zdjęcia:</p>
            <img 
              src={imageUrl} 
              alt="Preview" 
              className="max-h-40 rounded border border-border" 
            />
          </div>
        )}
        {imageUrl && (
          <Input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="URL zdjęcia"
            className="mt-2"
          />
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
