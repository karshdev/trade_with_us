import { forwardRef } from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  maxItems?: number;
}

export const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>(
  ({ 
    items,
    separator = '/',
    maxItems = 0,
    className = '',
    ...props 
  }, ref) => {
    const displayItems = maxItems > 0 && items.length > maxItems
      ? [
          ...items.slice(0, 1),
          { label: '...', href: undefined },
          ...items.slice(-2)
        ]
      : items;

    return (
      <nav
        ref={ref}
        className={`flex items-center space-x-2 text-sm text-gray-500 ${className}`}
        aria-label="Breadcrumb"
        {...props}
      >
        <ol className="flex items-center space-x-2">
          {displayItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-400">
                  {separator}
                </span>
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="flex items-center hover:text-gray-900"
                >
                  {item.icon && (
                    <span className="mr-1.5">
                      {item.icon}
                    </span>
                  )}
                  {item.label}
                </Link>
              ) : (
                <span className="flex items-center text-gray-800">
                  {item.icon && (
                    <span className="mr-1.5">
                      {item.icon}
                    </span>
                  )}
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb'; 