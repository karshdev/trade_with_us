import { forwardRef, useState, useRef, useEffect } from 'react';

interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  showArrow?: boolean;
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ 
    content, 
    children,
    position = 'top',
    delay = 200,
    showArrow = true,
    className = '',
    ...props 
  }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
    const triggerRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    let timeoutId: NodeJS.Timeout;

    const positions = {
      top: 'bottom-full left-1/2 -translate-x-1/2 -translate-y-2',
      bottom: 'top-full left-1/2 -translate-x-1/2 translate-y-2',
      left: 'right-full top-1/2 -translate-y-1/2 -translate-x-2',
      right: 'left-full top-1/2 -translate-y-1/2 translate-x-2',
    };

    const arrowPositions = {
      top: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-t-gray-800 border-x-transparent border-b-transparent',
      bottom: 'top-0 left-1/2 -translate-x-1/2 -translate-y-full border-b-gray-800 border-x-transparent border-t-transparent',
      left: 'right-0 top-1/2 -translate-y-1/2 translate-x-full border-l-gray-800 border-y-transparent border-r-transparent',
      right: 'left-0 top-1/2 -translate-y-1/2 -translate-x-full border-r-gray-800 border-y-transparent border-l-transparent',
    };

    const updatePosition = () => {
      if (!triggerRef.current || !tooltipRef.current) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      let top = 0;
      let left = 0;

      switch (position) {
        case 'top':
          top = triggerRect.top + scrollY - tooltipRect.height - 8;
          left = triggerRect.left + scrollX + (triggerRect.width - tooltipRect.width) / 2;
          break;
        case 'bottom':
          top = triggerRect.bottom + scrollY + 8;
          left = triggerRect.left + scrollX + (triggerRect.width - tooltipRect.width) / 2;
          break;
        case 'left':
          top = triggerRect.top + scrollY + (triggerRect.height - tooltipRect.height) / 2;
          left = triggerRect.left + scrollX - tooltipRect.width - 8;
          break;
        case 'right':
          top = triggerRect.top + scrollY + (triggerRect.height - tooltipRect.height) / 2;
          left = triggerRect.right + scrollX + 8;
          break;
      }

      setTooltipPosition({ top, left });
    };

    useEffect(() => {
      if (isVisible) {
        updatePosition();
        window.addEventListener('scroll', updatePosition);
        window.addEventListener('resize', updatePosition);
      }

      return () => {
        window.removeEventListener('scroll', updatePosition);
        window.removeEventListener('resize', updatePosition);
      };
    }, [isVisible, position]);

    const handleMouseEnter = () => {
      timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    };

    const handleMouseLeave = () => {
      clearTimeout(timeoutId);
      setIsVisible(false);
    };

    return (
      <div
        ref={triggerRef}
        className="inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        {isVisible && (
          <div
            ref={tooltipRef}
            style={{
              position: 'absolute',
              top: tooltipPosition.top,
              left: tooltipPosition.left,
            }}
            className={`z-50 px-2 py-1 text-sm text-white bg-gray-800 rounded ${positions[position]} ${className}`}
            {...props}
          >
            {content}
            {showArrow && (
              <div
                ref={ref}
                className={`absolute w-0 h-0 border-4 ${arrowPositions[position]}`}
              />
            )}
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip'; 