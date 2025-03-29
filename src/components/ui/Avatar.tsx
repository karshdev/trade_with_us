import { forwardRef } from 'react';
import Image from 'next/image';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string;
  status?: 'online' | 'offline' | 'away';
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ 
    src, 
    alt = '',
    size = 'md',
    fallback,
    status,
    className = '',
    ...props 
  }, ref) => {
    const baseStyles = 'relative inline-flex items-center justify-center rounded-full bg-gray-100 overflow-hidden';
    
    const sizes = {
      sm: 'w-8 h-8 text-sm',
      md: 'w-10 h-10 text-base',
      lg: 'w-12 h-12 text-lg',
      xl: 'w-16 h-16 text-xl',
    };

    const statusStyles = {
      online: 'bg-green-500',
      offline: 'bg-gray-400',
      away: 'bg-yellow-500',
    };

    const statusSizes = {
      sm: 'w-2 h-2',
      md: 'w-2.5 h-2.5',
      lg: 'w-3 h-3',
      xl: 'w-4 h-4',
    };

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${sizes[size]} ${className}`}
        {...props}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
          />
        ) : fallback ? (
          <span className="text-gray-600 font-medium">
            {fallback}
          </span>
        ) : null}
        {status && (
          <span
            className={`absolute bottom-0 right-0 block rounded-full ring-2 ring-white ${statusStyles[status]} ${statusSizes[size]}`}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar'; 