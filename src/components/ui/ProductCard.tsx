import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/api';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className = '' }: ProductCardProps) {
  return (
    <Link href={`/products/${product._id}`} className={`block ${className}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
        {/* Image Container */}
        <div className="relative h-48 w-full">
          <Image
            src={product.image}
            alt={product.productName}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {product.productName}
          </h3>
          
          <div className="space-y-1 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="font-medium">Origin:</span>
              <span className="ml-2">{product.origin}</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">Colour:</span>
              <span className="ml-2">{product.colour}</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">Type:</span>
              <span className="ml-2">{product.cultivationType}</span>
            </div>
          </div>

          {/* View Details Button */}
          <div className="mt-4">
            <span className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700">
              View Details
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
} 