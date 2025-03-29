import { forwardRef } from 'react';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular';
  animation?: 'pulse' | 'wave' | 'none';
  height?: string | number;
  width?: string | number;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ 
    variant = 'text',
    animation = 'pulse',
    height,
    width,
    className = '',
    ...props 
  }, ref) => {
    const baseStyles = 'bg-gray-200 rounded';
    
    const variants = {
      text: 'h-4 w-full',
      circular: 'h-12 w-12 rounded-full',
      rectangular: 'h-24 w-full',
    };

    const animations = {
      pulse: 'animate-pulse',
      wave: 'animate-shimmer bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%]',
      none: '',
    };

    const customStyles = {
      height: height ? `h-[${height}]` : '',
      width: width ? `w-[${width}]` : '',
    };

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${animations[animation]} ${customStyles.height} ${customStyles.width} ${className}`}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton'; 