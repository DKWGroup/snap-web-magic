
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';
import { PlusCircle, X, MoveUp, MoveDown, Image as ImageIcon } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  content_blocks?: ContentBlock[];
  image_url: string | null;
  author: string;
  published_at: string;
}

interface ContentBlock {
  type: 'text' | 'image';
  content: string;
  caption?: string;
  source?: string;
}

interface BlogPostFormProps {
  post: BlogPost | null;
  onClose: (refreshData: boolean) => void;
}

const BlogPostForm = ({ post, onClose }: BlogPostFormProps) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [mainImageUrl, setMainImageUrl] = useState('');
  const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([
    { type: 'text', content: '' }
  ]);
  const [isUploading, setIsUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setAuthor(post.author);
      setMainImageUrl(post.image_url || '');
      
      // Handle content blocks if they exist, otherwise create from content
      if (post.content_blocks && post.content_blocks.length > 0) {
        setContentBlocks(post.content_blocks);
      } else {
        setContentBlocks([{ type: 'text', content: post.content || '' }]);
      }
    }
  }, [post]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, blockIndex?: number) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    try {
      setIsUploading(true);
      const file = e.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `blog/${fileName}`;

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

      if (blockIndex !== undefined) {
        // Update the specific block with the image URL
        const updatedBlocks = [...contentBlocks];
        updatedBlocks[blockIndex] = {
          ...updatedBlocks[blockIndex],
          content: data.publicUrl
        };
        setContentBlocks(updatedBlocks);
      } else {
        // Update main image
        setMainImageUrl(data.publicUrl);
      }
      
      toast.success('Zdjęcie zostało przesłane');
    } catch (error: any) {
      console.error('Error uploading image:', error);
      toast.error(`Błąd podczas przesyłania zdjęcia: ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  const addContentBlock = (type: 'text' | 'image') => {
    setContentBlocks([
      ...contentBlocks, 
      { type, content: type === 'text' ? '' : '' }
    ]);
  };

  const updateBlockContent = (index: number, content: string) => {
    const updatedBlocks = [...contentBlocks];
    updatedBlocks[index] = { ...updatedBlocks[index], content };
    setContentBlocks(updatedBlocks);
  };

  const updateBlockCaption = (index: number, caption: string) => {
    const updatedBlocks = [...contentBlocks];
    updatedBlocks[index] = { ...updatedBlocks[index], caption };
    setContentBlocks(updatedBlocks);
  };

  const updateBlockSource = (index: number, source: string) => {
    const updatedBlocks = [...contentBlocks];
    updatedBlocks[index] = { ...updatedBlocks[index], source };
    setContentBlocks(updatedBlocks);
  };

  const removeBlock = (index: number) => {
    if (contentBlocks.length === 1) {
      toast.error('Musisz mieć co najmniej jeden blok treści');
      return;
    }
    const updatedBlocks = contentBlocks.filter((_, i) => i !== index);
    setContentBlocks(updatedBlocks);
  };

  const moveBlockUp = (index: number) => {
    if (index === 0) return;
    const updatedBlocks = [...contentBlocks];
    [updatedBlocks[index - 1], updatedBlocks[index]] = [updatedBlocks[index], updatedBlocks[index - 1]];
    setContentBlocks(updatedBlocks);
  };

  const moveBlockDown = (index: number) => {
    if (index === contentBlocks.length - 1) return;
    const updatedBlocks = [...contentBlocks];
    [updatedBlocks[index], updatedBlocks[index + 1]] = [updatedBlocks[index + 1], updatedBlocks[index]];
    setContentBlocks(updatedBlocks);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      // Generate the legacy content format for backward compatibility
      const legacyContent = contentBlocks
        .map(block => {
          if (block.type === 'text') {
            return block.content;
          } else {
            return `[IMAGE: ${block.content}${block.caption ? ` - ${block.caption}` : ''}${block.source ? ` (Source: ${block.source})` : ''}]`;
          }
        })
        .join('\n\n');

      const blogPostData = {
        title,
        content: legacyContent,
        content_blocks: contentBlocks,
        image_url: mainImageUrl || null,
        author
      };

      let result;
      
      if (post) {
        // Update existing post
        result = await supabase
          .from('blog_posts')
          .update(blogPostData)
          .eq('id', post.id);
      } else {
        // Create new post
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
          onChange={(e) => setTitle(e.target.value)}
          required
        />
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

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="block text-sm font-medium">
            Treść
          </label>
          <div className="flex gap-2">
            <Button 
              type="button" 
              variant="outline" 
              size="sm"
              onClick={() => addContentBlock('text')}
            >
              <PlusCircle className="w-4 h-4 mr-1" /> Tekst
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              size="sm"
              onClick={() => addContentBlock('image')}
            >
              <ImageIcon className="w-4 h-4 mr-1" /> Zdjęcie
            </Button>
          </div>
        </div>
        
        <div className="space-y-6">
          {contentBlocks.map((block, index) => (
            <div 
              key={index} 
              className="border border-border rounded-md p-4 relative"
            >
              <div className="absolute right-2 top-2 flex gap-1">
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="icon" 
                  className="h-6 w-6"
                  onClick={() => moveBlockUp(index)}
                  disabled={index === 0}
                >
                  <MoveUp className="h-4 w-4" />
                </Button>
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="icon" 
                  className="h-6 w-6"
                  onClick={() => moveBlockDown(index)}
                  disabled={index === contentBlocks.length - 1}
                >
                  <MoveDown className="h-4 w-4" />
                </Button>
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="icon" 
                  className="h-6 w-6 text-destructive"
                  onClick={() => removeBlock(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {block.type === 'text' ? (
                <div className="pt-6">
                  <textarea
                    className="flex h-40 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={block.content}
                    onChange={(e) => updateBlockContent(index, e.target.value)}
                    placeholder="Wprowadź tekst..."
                    required={contentBlocks.length === 1}
                  />
                </div>
              ) : (
                <div className="space-y-3 pt-6">
                  <div className="flex items-center gap-4">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, index)}
                      disabled={isUploading}
                    />
                    {isUploading && <div className="animate-spin h-5 w-5 border-b-2 rounded-full border-primary"></div>}
                  </div>
                  {block.content && (
                    <div>
                      <img 
                        src={block.content} 
                        alt="Content" 
                        className="max-h-40 rounded border border-border" 
                      />
                      <Input
                        value={block.content}
                        onChange={(e) => updateBlockContent(index, e.target.value)}
                        placeholder="URL zdjęcia"
                        className="mt-2"
                      />
                    </div>
                  )}
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="block text-xs mb-1">Podpis</label>
                      <Input
                        value={block.caption || ''}
                        onChange={(e) => updateBlockCaption(index, e.target.value)}
                        placeholder="Podpis pod zdjęciem"
                      />
                    </div>
                    <div>
                      <label className="block text-xs mb-1">Źródło</label>
                      <Input
                        value={block.source || ''}
                        onChange={(e) => updateBlockSource(index, e.target.value)}
                        placeholder="Źródło zdjęcia"
                      />
                    </div>
                  </div>
                </div>
              )}
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
