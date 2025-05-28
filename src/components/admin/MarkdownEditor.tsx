
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlusCircle, Image, Type, X, Upload } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';
import ReactMarkdown from 'react-markdown';

interface ContentBlock {
  id: string;
  type: 'text' | 'image';
  content: string;
  caption?: string;
}

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  contentBlocks?: ContentBlock[];
  onContentBlocksChange?: (blocks: ContentBlock[]) => void;
}

const MarkdownEditor = ({ value, onChange, contentBlocks = [], onContentBlocksChange }: MarkdownEditorProps) => {
  const [isUploading, setIsUploading] = useState(false);

  const addTextBlock = () => {
    const newBlock: ContentBlock = {
      id: uuidv4(),
      type: 'text',
      content: ''
    };
    const updatedBlocks = [...contentBlocks, newBlock];
    onContentBlocksChange?.(updatedBlocks);
  };

  const addImageBlock = () => {
    const newBlock: ContentBlock = {
      id: uuidv4(),
      type: 'image',
      content: '',
      caption: ''
    };
    const updatedBlocks = [...contentBlocks, newBlock];
    onContentBlocksChange?.(updatedBlocks);
  };

  const updateBlock = (id: string, updates: Partial<ContentBlock>) => {
    const updatedBlocks = contentBlocks.map(block =>
      block.id === id ? { ...block, ...updates } : block
    );
    onContentBlocksChange?.(updatedBlocks);
  };

  const removeBlock = (id: string) => {
    const updatedBlocks = contentBlocks.filter(block => block.id !== id);
    onContentBlocksChange?.(updatedBlocks);
  };

  const handleImageUpload = async (blockId: string, file: File) => {
    try {
      setIsUploading(true);
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

      updateBlock(blockId, { content: data.publicUrl });
      toast.success('Zdjęcie zostało przesłane');
    } catch (error: any) {
      console.error('Error uploading image:', error);
      toast.error(`Błąd podczas przesyłania zdjęcia: ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="markdown" className="w-full">
        <TabsList>
          <TabsTrigger value="markdown">Markdown</TabsTrigger>
          <TabsTrigger value="blocks">Bloki treści</TabsTrigger>
          <TabsTrigger value="preview">Podgląd</TabsTrigger>
        </TabsList>
        
        <TabsContent value="markdown" className="space-y-2">
          <label className="block text-sm font-medium">
            Treść (Markdown)
          </label>
          <Textarea
            className="h-60 font-mono"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Napisz treść używając formatowania Markdown:&#10;&#10;# Nagłówek 1&#10;## Nagłówek 2&#10;### Nagłówek 3&#10;&#10;**Pogrubiony tekst**&#10;*Kursywa*&#10;&#10;- Lista punktowa&#10;- Drugi punkt&#10;&#10;1. Lista numerowana&#10;2. Drugi punkt&#10;&#10;> Cytat&#10;&#10;`kod inline`&#10;&#10;```&#10;blok kodu&#10;```&#10;&#10;[Link](https://example.com)"
          />
          <p className="text-xs text-muted-foreground">
            Użyj formatowania Markdown: **pogrubiony**, *kursywa*, # nagłówki, [linki](url), itp.
          </p>
        </TabsContent>

        <TabsContent value="blocks" className="space-y-4">
          <div className="flex gap-2">
            <Button 
              type="button" 
              variant="outline" 
              size="sm"
              onClick={addTextBlock}
            >
              <Type className="w-4 h-4 mr-1" /> Dodaj tekst
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              size="sm"
              onClick={addImageBlock}
            >
              <Image className="w-4 h-4 mr-1" /> Dodaj zdjęcie
            </Button>
          </div>

          <div className="space-y-4">
            {contentBlocks.map((block) => (
              <Card key={block.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-sm flex items-center gap-2">
                      {block.type === 'text' ? <Type className="w-4 h-4" /> : <Image className="w-4 h-4" />}
                      {block.type === 'text' ? 'Blok tekstu' : 'Blok zdjęcia'}
                    </CardTitle>
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="icon"
                      onClick={() => removeBlock(block.id)}
                      className="text-destructive h-6 w-6"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {block.type === 'text' ? (
                    <Textarea
                      value={block.content}
                      onChange={(e) => updateBlock(block.id, { content: e.target.value })}
                      placeholder="Treść w formacie Markdown..."
                      className="font-mono"
                      rows={4}
                    />
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              handleImageUpload(block.id, file);
                            }
                          }}
                          disabled={isUploading}
                          className="max-w-xs"
                        />
                        {isUploading && <div className="animate-spin h-5 w-5 border-b-2 rounded-full border-primary"></div>}
                      </div>
                      
                      <Input
                        value={block.content}
                        onChange={(e) => updateBlock(block.id, { content: e.target.value })}
                        placeholder="URL zdjęcia"
                      />
                      
                      <Input
                        value={block.caption || ''}
                        onChange={(e) => updateBlock(block.id, { caption: e.target.value })}
                        placeholder="Podpis zdjęcia (opcjonalnie)"
                      />
                      
                      {block.content && (
                        <div className="mt-2">
                          <p className="text-sm text-muted-foreground mb-2">Podgląd:</p>
                          <img 
                            src={block.content} 
                            alt={block.caption || "Preview"} 
                            className="max-h-40 rounded border border-border" 
                          />
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
            
            {contentBlocks.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <p>Brak bloków treści. Dodaj pierwszy blok powyżej.</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="preview" className="space-y-4">
          <div className="prose prose-slate max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-bold mt-5 mb-2">{children}</h3>,
                p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
                ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>,
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <code className="bg-muted px-1 py-0.5 rounded text-sm font-mono">{children}</code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-4">{children}</pre>
                ),
                strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                em: ({ children }) => <em className="italic">{children}</em>,
              }}
            >
              {value}
            </ReactMarkdown>
          </div>

          {contentBlocks.length > 0 && (
            <div className="space-y-6 mt-8">
              <h3 className="text-lg font-semibold">Bloki treści:</h3>
              {contentBlocks.map((block) => (
                <div key={block.id} className="space-y-2">
                  {block.type === 'text' ? (
                    <div className="prose prose-slate max-w-none">
                      <ReactMarkdown>{block.content}</ReactMarkdown>
                    </div>
                  ) : (
                    block.content && (
                      <figure className="space-y-2">
                        <img 
                          src={block.content} 
                          alt={block.caption || ""} 
                          className="rounded-lg max-w-full"
                        />
                        {block.caption && (
                          <figcaption className="text-sm text-muted-foreground text-center">
                            {block.caption}
                          </figcaption>
                        )}
                      </figure>
                    )
                  )}
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MarkdownEditor;
