
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';
import { PlusCircle, X } from 'lucide-react';
import MarkdownEditor from './MarkdownEditor';

interface BlogPost {
  id: string;
  title: string;
  slug?: string;
  content: string;
  content_blocks?: ContentBlock[];
  image_url: string | null;
  author: string;
  published_at: string;
  sources?: string[];
}

interface ContentBlock {
  id: string;
  type: 'text' | 'image';
  content: string;
  caption?: string;
}

interface BlogPostFormProps {
  post: BlogPost | null;
  onClose: (refreshData: boolean) => void;
}

const BlogPostForm = ({ post, onClose }: BlogPostFormProps) => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [author, setAuthor] = useState('');
  const [mainImageUrl, setMainImageUrl] = useState('');
  const [markdownContent, setMarkdownContent] = useState('');
  const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([]);
  const [sources, setSources] = useState<string[]>(['']);
  const [isUploading, setIsUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setSlug(post.slug || '');
      setAuthor(post.author);
      setMainImageUrl(post.image_url || '');
      setMarkdownContent(post.content || '');
      setContentBlocks(post.content_blocks || []);
      setSources(post.sources && post.sources.length > 0 ? post.sources : ['']);
    }
  }, [post]);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9ąćęłńóśźż\s-]/g, '')
      .replace(/[ąćęłńóśźż]/g, (char) => {
        const map: { [key: string]: string } = {
          'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n',
          'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z'
        };
        return map[char] || char;
      })
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!post && !slug) {
      setSlug(generateSlug(value));
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    try {
      setIsUploading(true);
      const file = e.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `blog/${fileName}`;

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

      setMainImageUrl(data.publicUrl);
      toast.success('Zdjęcie zostało przesłane');
    } catch (error: any) {
      console.error('Error uploading image:', error);
      toast.error(`Błąd podczas przesyłania zdjęcia: ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  const addSource = () => {
    setSources([...sources, '']);
  };

  const updateSource = (index: number, value: string) => {
    const updatedSources = [...sources];
    updatedSources[index] = value;
    setSources(updatedSources);
  };

  const removeSource = (index: number) => {
    if (sources.length === 1) {
      setSources(['']);
      return;
    }
    const updatedSources = sources.filter((_, i) => i !== index);
    setSources(updatedSources);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      if (!slug.trim()) {
        toast.error('Slug jest wymagany');
        return;
      }

      // Sprawdź czy slug już istnieje (tylko dla nowych postów lub gdy slug się zmienił)
      if (!post || post.slug !== slug) {
        const { data: existingPost } = await supabase
          .from('blog_posts')
          .select('id')
          .eq('slug', slug)
          .maybeSingle();

        if (existingPost) {
          toast.error('Post z tym slug już istnieje');
          return;
        }
      }

      // Filtruj puste źródła
      const filteredSources = sources.filter(source => source.trim() !== '');

      const blogPostData = {
        title,
        slug: slug.trim(),
        content: markdownContent,
        content_blocks: contentBlocks.length > 0 ? contentBlocks : null,
        image_url: mainImageUrl || null,
        author,
        sources: filteredSources.length > 0 ? filteredSources : null
      };

      let result;
      
      if (post) {
        result = await supabase
          .from('blog_posts')
          .update(blogPostData)
          .eq('id', post.id);
      } else {
        result = await supabase
          .from('blog_posts')
          .insert([blogPostData]);
      }

      if (result.error) {
        throw result.error;
      }

      toast.success(post ? 'Post został zaktualizowany' : 'Post został dodany');
      onClose(true);
    } catch (error: any) {
      console.error('Error saving blog post:', error);
      toast.error(`Błąd podczas zapisywania postu: ${error.message}`);
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
          onChange={(e) => handleTitleChange(e.target.value)}
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
          placeholder="slug-url-posta"
          required
        />
        <p className="text-xs text-muted-foreground">
          URL będzie wyglądał tak: /blog/{slug || 'slug-url-posta'}
        </p>
      </div>

      <div className="space-y-2">
        <label htmlFor="author" className="block text-sm font-medium">
          Autor
        </label>
        <Input
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
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
          {isUploading && <div className="animate-spin h-5 w-5 border-b-2 rounded-full border-primary"></div>}
        </div>
        {mainImageUrl && (
          <div className="mt-2">
            <p className="text-sm text-muted-foreground mb-2">Podgląd zdjęcia:</p>
            <img 
              src={mainImageUrl} 
              alt="Preview" 
              className="max-h-40 rounded border border-border" 
            />
          </div>
        )}
        {mainImageUrl && (
          <Input
            value={mainImageUrl}
            onChange={(e) => setMainImageUrl(e.target.value)}
            placeholder="URL zdjęcia"
            className="mt-2"
          />
        )}
      </div>

      <MarkdownEditor
        value={markdownContent}
        onChange={setMarkdownContent}
        contentBlocks={contentBlocks}
        onContentBlocksChange={setContentBlocks}
      />

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="block text-sm font-medium">
            Źródła
          </label>
          <Button 
            type="button" 
            variant="outline" 
            size="sm"
            onClick={addSource}
          >
            <PlusCircle className="w-4 h-4 mr-1" /> Dodaj źródło
          </Button>
        </div>
        
        <div className="space-y-3">
          {sources.map((source, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={source}
                onChange={(e) => updateSource(index, e.target.value)}
                placeholder="https://example.com - nazwa źródła"
                className="flex-1"
              />
              <Button 
                type="button" 
                variant="ghost" 
                size="icon"
                onClick={() => removeSource(index)}
                className="text-destructive"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button type="button" variant="outline" onClick={() => onClose(false)}>
          Anuluj
        </Button>
        <Button type="submit" disabled={isSaving}>
          {isSaving ? 'Zapisywanie...' : post ? 'Zapisz zmiany' : 'Dodaj post'}
        </Button>
      </div>
    </form>
  );
};

export default BlogPostForm;
