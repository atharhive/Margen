import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  aspectClass?: string;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  caption,
  className = '',
  aspectClass = 'aspect-[4/3]',
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-[12px] bg-[#f0f0ea] ${aspectClass} ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-3 border border-[#e4ded3] bg-[#f0f0ea] p-6 text-center"
          role="img"
          aria-label={alt}
        >
          <BookOpen className="h-6 w-6 text-[#6a6972]" strokeWidth={1.5} />
          <span className="max-w-xs text-[13px] font-medium text-[#454545]">
            {caption || alt}
          </span>
        </div>
      )}
    </div>
  );
};
