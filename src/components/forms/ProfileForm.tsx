'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    businessName: '',
    businessOverview: '',
    businessType: '',
    established: '',
    address: '',
    owner: '',
    email: '',
    password: '',
  });

  const [files, setFiles] = useState({
    logo: null as File | null,
    banner: null as File | null,
  });

  const [preview, setPreview] = useState({
    logo: '',
    banner: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files: fileList } = e.target;
    if (fileList && fileList[0]) {
      setFiles(prev => ({ ...prev, [name]: fileList[0] }));
      setPreview(prev => ({ ...prev, [name]: URL.createObjectURL(fileList[0]) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    
    if (files.logo) formDataToSend.append('logo', files.logo);
    if (files.banner) formDataToSend.append('banner', files.banner);

    try {
      const response = await fetch('/api/profiles', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Failed to create profile');
      }

      // Reset form after successful submission
      setFormData({
        businessName: '',
        businessOverview: '',
        businessType: '',
        established: '',
        address: '',
        owner: '',
        email: '',
        password: '',
      });
      setFiles({ logo: null, banner: null });
      setPreview({ logo: '', banner: '' });

      alert('Profile created successfully!');
    } catch (error) {
      alert('Error creating profile: ' + (error as Error).message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Business Name</label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-primary-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Business Overview</label>
          <textarea
            name="businessOverview"
            value={formData.businessOverview}
            onChange={handleInputChange}
            rows={3}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-primary-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Business Type</label>
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-primary-500"
            required
          >
            <option value="">Select a type</option>
            <option value="Food manufacturing">Food manufacturing</option>
            <option value="Farming">Farming</option>
            <option value="Processing">Processing</option>
            <option value="Packing">Packing</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Established Year</label>
          <input
            type="number"
            name="established"
            value={formData.established}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-primary-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-primary-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Owner Name</label>
          <input
            type="text"
            name="owner"
            value={formData.owner}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-primary-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-primary-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-primary-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Logo</label>
          <input
            type="file"
            name="logo"
            onChange={handleFileChange}
            accept="image/*"
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
          />
          {preview.logo && (
            <div className="mt-2">
              <Image
                src={preview.logo}
                alt="Logo preview"
                width={100}
                height={100}
                className="rounded-md object-cover"
              />
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Banner</label>
          <input
            type="file"
            name="banner"
            onChange={handleFileChange}
            accept="image/*"
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
          />
          {preview.banner && (
            <div className="mt-2">
              <Image
                src={preview.banner}
                alt="Banner preview"
                width={200}
                height={100}
                className="rounded-md object-cover"
              />
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        Create Profile
      </button>
    </form>
  );
} 