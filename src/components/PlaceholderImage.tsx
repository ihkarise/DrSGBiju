import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { ImageIcon } from 'lucide-react';

interface PlaceholderImageProps extends React.HTMLAttributes<HTMLDivElement> {
  aspectRatio?: string;
  label?: string;
  icon?: React.ReactNode;
  srcBase?: string;
  alt?: string;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ 
  className, 
  aspectRatio = 'aspect-square',
  label = 'Image Placeholder',
  icon,
  srcBase,
  alt,
  ...props 
}) => {
  const [imgState, setImgState] = useState<'try-jpg' | 'try-png' | 'error' | 'loaded'>(srcBase ? 'try-jpg' : 'error');

  useEffect(() => {
    setImgState(srcBase ? 'try-jpg' : 'error');
  }, [srcBase]);

  const handleError = () => {
    if (imgState === 'try-jpg') {
      setImgState('try-png');
    } else {
      setImgState('error');
    }
  };

  const handleSuccess = () => {
    setImgState('loaded');
  };

  const getUrl = (path: string) => {
    if (path.startsWith('/')) {
      // Remove leading slash and prepend BASE_URL (which has a trailing slash)
      return `${import.meta.env.BASE_URL}${path.substring(1)}`;
    }
    return path;
  };

  return (
    <div 
      className={cn(
        "relative bg-bg-secondary border border-gray-200 flex flex-col items-center justify-center text-gray-400 overflow-hidden",
        aspectRatio,
        className
      )}
      {...props}
    >
      {imgState === 'error' && (
        <div className="flex flex-col items-center justify-center p-4 text-center z-10 w-full h-full">
          {icon || <ImageIcon className="w-10 h-10 mb-2 opacity-50" />}
          <span className="text-sm font-medium tracking-wide opacity-75">{label}</span>
          {srcBase && <span className="text-[10px] mt-2 font-mono bg-black/5 px-2 py-1 rounded text-gray-500">upload: {srcBase.split('/').pop()}.(jpg|png)</span>}
        </div>
      )}

      {(imgState === 'try-jpg' || imgState === 'try-png' || imgState === 'loaded') && srcBase && (
         <img 
           src={getUrl(`${srcBase}${imgState === 'try-jpg' ? '.jpg' : '.png'}`)}
           alt={alt || label}
           className={cn("absolute inset-0 w-full h-full object-cover transition-opacity duration-300 z-20 bg-bg-secondary", imgState === 'loaded' ? 'opacity-100' : 'opacity-0')}
           onLoad={handleSuccess}
           onError={handleError}
         />
      )}
    </div>
  );
}
