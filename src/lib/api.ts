import { useMutation } from '@tanstack/react-query';

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  businessName: string;
  businessOverview: string;
  businessType: string;
  established: string;
  address: string;
  owner: string;
  email: string;
  password: string;
  confirmPassword: string;
  logo?: File;
}

// API functions
const login = async (credentials: LoginCredentials) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error || 'Login failed');
  }

  return response.json();
};

const register = async (data: FormData | RegisterData) => {
  // Convert established to number if it's a string
  if (!(data instanceof FormData)) {
    data = Object.entries(data).reduce((formData, [key, value]) => {
      if (key === 'established') {
        formData.append(key, String(parseInt(value, 10)));
      } else if (key !== 'confirmPassword') {
        formData.append(key, value);
      }
      return formData;
    }, new FormData());
  }

  const response = await fetch('/api/auth/register', {
    method: 'POST',
    body: data, // FormData will automatically set the correct Content-Type
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Registration failed');
  }

  return response.json();
};

// React Query hooks
export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      window.location.href = '/';
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      window.location.href = '/login?registered=true';
    },
  });
};

// Product types
export interface Product {
  _id: string;
  productName: string;
  origin: string;
  packingDetails: string;
  forecast: string;
  colour: string;
  cultivationType: string;
  moisture: string;
  formAndCut: string;
  image: string;
  profileId: string;
  createdAt: string;
  updatedAt: string;
}

// Helper function to get auth token
const getAuthToken = () => {
  if (typeof document !== 'undefined') {
    return document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
  }
  return null;
};

// Helper function to get headers with auth
const getHeaders = (includeAuth = true) => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  
  if (includeAuth) {
    const token = getAuthToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }
  
  return headers;
};

// Product API functions
export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch('/api/products', {
    headers: getHeaders(),
  });
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await fetch(`/api/products/${id}`, {
    headers: getHeaders(),
  });
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  return response.json();
};

export const createProduct = async (formData: FormData): Promise<Product> => {
  const response = await fetch('/api/products', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${getAuthToken()}`,
    },
    body: formData,
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to create product');
  }
  return response.json();
}; 