import { forwardRef, useState, useRef, useEffect } from 'react';

interface DropdownItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  danger?: boolean;
}

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  trigger: React.ReactNode;
  items: DropdownItem[];
  align?: 'left' | 'right';
  placement?: 'top' | 'bottom';
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ 
    trigger, 
    items,
    align = 'left',
    placement = 'bottom',
    className = '',
    ...props 
  }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const alignments = {
      left: 'left-0',
      right: 'right-0',
    };

    const placements = {
      top: 'bottom-full mb-2',
      bottom: 'top-full mt-2',
    };

    return (
      <div
        ref={ref}
        className={`relative inline-block ${className}`}
        {...props}
      >
        <div onClick={() => setIsOpen(!isOpen)}>
          {trigger}
        </div>
        {isOpen && (
          <div
            ref={dropdownRef}
            className={`absolute z-50 w-56 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 ${alignments[align]} ${placements[placement]}`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  item.onClick?.();
                  setIsOpen(false);
                }}
                disabled={item.disabled}
                className={`
                  flex w-full items-center px-4 py-2 text-sm
                  ${item.disabled
                    ? 'cursor-not-allowed text-gray-400'
                    : item.danger
                    ? 'text-red-700 hover:bg-red-50'
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
                role="menuitem"
              >
                {item.icon && (
                  <span className="mr-3 h-5 w-5">
                    {item.icon}
                  </span>
                )}
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown'; 