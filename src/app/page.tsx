'use client';

import { Tabs } from '@/components/ui/Tabs';
import ProfileForm from '@/components/forms/ProfileForm';
import ProductForm from '@/components/forms/ProductForm';
import { ProductsList } from '@/components/products/ProductsList';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Home() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check');
        if (!response.ok) {
          router.push('/login');
          return;
        }
        setIsAuthenticated(true);
      } catch (error) {
        router.push('/login');
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (!isAuthenticated) {
    return null; // or a loading spinner
  }

  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-primary-600">
              Trade With Us
            </h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Logout
            </button>
          </div>
          
          <Tabs
            tabs={[
              {
                id: 'profile',
                label: 'Create Profile',
                content: <ProfileForm />
              },
              {
                id: 'product',
                label: 'Add Product',
                content: <ProductForm />
              },
              {
                id: 'products',
                label: 'View Products',
                content: <ProductsList />
              }
            ]}
          />
        </div>
      </main>
    </QueryClientProvider>
  );
}
