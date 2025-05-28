
interface OptimizationOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
}

const DEFAULT_OPTIONS: Required<OptimizationOptions> = {
  maxWidth: 1920,
  maxHeight: 1080,
  quality: 0.85,
  format: 'webp'
};

export const optimizeImage = async (
  file: File, 
  options: OptimizationOptions = {}
): Promise<File> => {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    if (!ctx) {
      reject(new Error('Canvas context not available'));
      return;
    }
    
    img.onload = () => {
      // Calculate new dimensions while maintaining aspect ratio
      let { width, height } = img;
      
      if (width > opts.maxWidth || height > opts.maxHeight) {
        const aspectRatio = width / height;
        
        if (width > height) {
          width = Math.min(width, opts.maxWidth);
          height = width / aspectRatio;
        } else {
          height = Math.min(height, opts.maxHeight);
          width = height * aspectRatio;
        }
      }
      
      // Set canvas dimensions
      canvas.width = width;
      canvas.height = height;
      
      // Draw and compress image
      ctx.drawImage(img, 0, 0, width, height);
      
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error('Failed to optimize image'));
            return;
          }
          
          // Create new file with optimized content
          const optimizedFile = new File(
            [blob], 
            file.name.replace(/\.[^/.]+$/, `.${opts.format}`),
            { 
              type: `image/${opts.format}`,
              lastModified: Date.now()
            }
          );
          
          console.log(`Image optimized: ${file.size} → ${optimizedFile.size} bytes (${Math.round((1 - optimizedFile.size / file.size) * 100)}% reduction)`);
          resolve(optimizedFile);
        },
        `image/${opts.format}`,
        opts.quality
      );
    };
    
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = URL.createObjectURL(file);
  });
};

export const optimizeImageForThumbnail = (file: File): Promise<File> => {
  return optimizeImage(file, {
    maxWidth: 400,
    maxHeight: 300,
    quality: 0.8,
    format: 'webp'
  });
};

export const optimizeImageForGallery = (file: File): Promise<File> => {
  return optimizeImage(file, {
    maxWidth: 1200,
    maxHeight: 800,
    quality: 0.85,
    format: 'webp'
  });
};
