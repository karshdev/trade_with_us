import { forwardRef } from 'react';

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  switchSize?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'success' | 'warning' | 'error';
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ 
    label,
    switchSize = 'md',
    color = 'primary',
    className = '',
    ...props 
  }, ref) => {
    const sizes = {
      sm: 'w-9 h-5',
      md: 'w-11 h-6',
      lg: 'w-14 h-7',
    };

    const colors = {
      primary: 'bg-blue-600 focus:ring-blue-500',
      success: 'bg-green-600 focus:ring-green-500',
      warning: 'bg-yellow-600 focus:ring-yellow-500',
      error: 'bg-red-600 focus:ring-red-500',
    };

    const dotSizes = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
    };

    return (
      <label className="inline-flex items-center cursor-pointer">
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            className="sr-only peer"
            {...props}
          />
          <div
            className={`
              ${sizes[switchSize]}
              bg-gray-200 peer-focus:outline-none peer-focus:ring-4
              rounded-full peer peer-checked:after:translate-x-full
              peer-checked:after:border-white after:content-['']
              after:absolute after:top-[2px] after:left-[2px]
              after:bg-white after:border-gray-300 after:border
              after:rounded-full after:transition-all
              ${colors[color]}
              ${className}
            `}
          >
            <div className={`${dotSizes[switchSize]} rounded-full bg-white shadow-sm`} />
          </div>
        </div>
        {label && (
          <span className="ml-3 text-sm font-medium text-gray-900">
            {label}
          </span>
        )}
      </label>
    );
  }
);

Switch.displayName = 'Switch'; 