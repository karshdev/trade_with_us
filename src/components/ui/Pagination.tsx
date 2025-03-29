import { forwardRef } from 'react';

interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
}

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  ({ 
    currentPage,
    totalPages,
    onPageChange,
    siblingCount = 1,
    showFirstLast = true,
    showPrevNext = true,
    className = '',
    ...props 
  }, ref) => {
    const range = (start: number, end: number) => {
      const length = end - start + 1;
      return Array.from({ length }, (_, idx) => idx + start);
    };

    const createPagination = () => {
      const totalNumbers = siblingCount * 2 + 3;
      const totalBlocks = totalNumbers + 2;

      if (totalPages <= totalBlocks) {
        return range(1, totalPages);
      }

      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
      const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

      const shouldShowLeftDots = leftSiblingIndex > 2;
      const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

      if (!shouldShowLeftDots && shouldShowRightDots) {
        const leftItemCount = 3 + 2 * siblingCount;
        return [...range(1, leftItemCount), '...', totalPages];
      }

      if (shouldShowLeftDots && !shouldShowRightDots) {
        const rightItemCount = 3 + 2 * siblingCount;
        return [1, '...', ...range(totalPages - rightItemCount + 1, totalPages)];
      }

      return [
        1,
        '...',
        ...range(leftSiblingIndex, rightSiblingIndex),
        '...',
        totalPages,
      ];
    };

    const pages = createPagination();

    const handlePageChange = (page: number | string) => {
      if (typeof page === 'number' && page !== currentPage) {
        onPageChange(page);
      }
    };

    return (
      <nav
        ref={ref}
        className={`flex items-center justify-center space-x-1 ${className}`}
        aria-label="Pagination"
        {...props}
      >
        {showFirstLast && (
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className={`
              px-2 py-1 text-sm rounded-md
              ${currentPage === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100'
              }
            `}
          >
            First
          </button>
        )}
        {showPrevNext && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`
              px-2 py-1 text-sm rounded-md
              ${currentPage === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100'
              }
            `}
          >
            Previous
          </button>
        )}
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(page)}
            disabled={page === '...'}
            className={`
              px-3 py-1 text-sm rounded-md
              ${page === currentPage
                ? 'bg-blue-600 text-white'
                : page === '...'
                ? 'text-gray-400 cursor-default'
                : 'text-gray-700 hover:bg-gray-100'
              }
            `}
          >
            {page}
          </button>
        ))}
        {showPrevNext && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`
              px-2 py-1 text-sm rounded-md
              ${currentPage === totalPages
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100'
              }
            `}
          >
            Next
          </button>
        )}
        {showFirstLast && (
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className={`
              px-2 py-1 text-sm rounded-md
              ${currentPage === totalPages
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100'
              }
            `}
          >
            Last
          </button>
        )}
      </nav>
    );
  }
);

Pagination.displayName = 'Pagination'; 