import { forwardRef } from 'react';

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'success' | 'warning' | 'error';
  showValue?: boolean;
  animated?: boolean;
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ 
    value, 
    max = 100,
    size = 'md',
    variant = 'primary',
    showValue = false,
    animated = false,
    className = '',
    ...props 
  }, ref) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));
    
    const sizes = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-4',
    };

    const variants = {
      primary: 'bg-blue-600',
      success: 'bg-green-600',
      warning: 'bg-yellow-600',
      error: 'bg-red-600',
    };

    const animations = {
      primary: 'animate-progress-primary',
      success: 'animate-progress-success',
      warning: 'animate-progress-warning',
      error: 'animate-progress-error',
    };

    return (
      <div
        ref={ref}
        className={`w-full bg-gray-200 rounded-full overflow-hidden ${sizes[size]} ${className}`}
        {...props}
      >
        <div
          className={`h-full rounded-full transition-all duration-300 ${variants[variant]} ${animated ? animations[variant] : ''}`}
          style={{ width: `${percentage}%` }}
        />
        {showValue && (
          <div className="mt-1 text-sm text-gray-600">
            {Math.round(percentage)}%
          </div>
        )}
      </div>
    );
  }
);

Progress.displayName = 'Progress'; 