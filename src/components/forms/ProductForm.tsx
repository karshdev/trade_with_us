'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Alert } from '@/components/ui/Alert';

interface ProductFormData {
  productName: string;
  origin: string;
  packingDetails: string;
  forecast: string;
  colour: string;
  cultivationType: string;
  moisture: string;
  formAndCut: string;
}

const initialFormData: ProductFormData = {
  productName: '',
  origin: '',
  packingDetails: '',
  forecast: '',
  colour: '',
  cultivationType: '',
  moisture: '',
  formAndCut: '',
};

export default function ProductForm() {
  const [formData, setFormData] = useState<ProductFormData>(initialFormData);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(''); // Clear error when user starts typing
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        return;
      }
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Please upload a valid image file');
        return;
      }
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      // Get the current user's profile ID from the session
      const profileResponse = await fetch('/api/auth/check');
      if (!profileResponse.ok) {
        const errorData = await profileResponse.json();
        throw new Error(errorData.error || 'Failed to get user profile');
      }
      const { profileId } = await profileResponse.json();

      if (!profileId) {
        throw new Error('Profile ID not found. Please try logging in again.');
      }

      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      
      if (image) {
        formDataToSend.append('image', image);
      }

      // Add the profileId to the form data
      formDataToSend.append('profileId', profileId);

      const response = await fetch('/api/products', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create product');
      }

      // Reset form after successful submission
      setFormData(initialFormData);
      setImage(null);
      setPreview('');
      setError('');
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="error" title="Error">
          {error}
        </Alert>
      )}

      <div className="space-y-4">
        <Input
          label="Product Name"
          name="productName"
          value={formData.productName}
          onChange={handleInputChange}
          required
        />

        <Input
          label="Origin"
          name="origin"
          value={formData.origin}
          onChange={handleInputChange}
          required
        />

        <div>
          <label className="block text-sm font-medium text-gray-700">Packing Details</label>
          <textarea
            name="packingDetails"
            value={formData.packingDetails}
            onChange={handleInputChange}
            rows={3}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-primary-500"
            required
          />
        </div>

        <Input
          label="Forecast"
          name="forecast"
          value={formData.forecast}
          onChange={handleInputChange}
          required
        />

        <Input
          label="Colour"
          name="colour"
          value={formData.colour}
          onChange={handleInputChange}
          required
        />

        <Input
          label="Cultivation Type"
          name="cultivationType"
          value={formData.cultivationType}
          onChange={handleInputChange}
          required
        />

        <Input
          label="Moisture"
          name="moisture"
          value={formData.moisture}
          onChange={handleInputChange}
          required
        />

        <Input
          label="Form and Cut"
          name="formAndCut"
          value={formData.formAndCut}
          onChange={handleInputChange}
          required
        />

        <div>
          <label className="block text-sm font-medium text-gray-700">Product Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
            required
          />
          {preview && (
            <div className="mt-2">
              <Image
                src={preview}
                alt="Product preview"
                width={200}
                height={200}
                className="rounded-md object-cover"
              />
            </div>
          )}
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Creating Product...' : 'Create Product'}
      </Button>
    </form>
  );
} 