"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Alert } from '@/components/ui/Alert';
import { Select } from '@/components/ui/Select';
import { useRegister } from '@/lib/api';

const businessTypes = [
  { value: 'trading', label: 'Trading' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'farming', label: 'Farming' },
  { value: 'processing', label: 'Processing' },
  { value: 'packing', label: 'Packing' },
  { value: 'food_manufacturing', label: 'Food Manufacturing' },
  { value: 'retail', label: 'Retail' },
  { value: 'wholesale', label: 'Wholesale' },
  { value: 'import_export', label: 'Import/Export' },
  { value: 'other', label: 'Other' }
];

export default function SignupPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    businessOverview: "",
    businessType: "",
    established: "",
    address: "",
    owner: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const registerMutation = useRegister();

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError("Logo file size should be less than 5MB");
        return;
      }

      // Check file type
      if (!file.type.startsWith('image/')) {
        setError("Please upload an image file");
        return;
      }

      setLogoFile(file);
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setLogoPreview(previewUrl);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Create FormData instance to handle file upload
      const submitData = new FormData();
      
      // Add all form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== 'confirmPassword') {
          submitData.append(key, value);
        }
      });

      // Add logo if selected
      if (logoFile) {
        submitData.append('logo', logoFile);
      }

      await registerMutation.mutateAsync(submitData);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col py-6 px-4 sm:px-6">
      <div className="w-full max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Create your business profile
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-primary-600 hover:text-primary-500"
          >
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-6 w-full max-w-md mx-auto">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {error && (
            <Alert
              variant="error"
              title="Registration Error"
            >
              {error}
            </Alert>
          )}

          <Input
            id="businessName"
            name="businessName"
            type="text"
            label="Business Name"
            required
            value={formData.businessName}
            onChange={(e) =>
              setFormData({ ...formData, businessName: e.target.value })
            }
            placeholder="Enter business name"
          />

          <Select
            label="Business Type"
            isRequired
            value={formData.businessType ? { value: formData.businessType, label: businessTypes.find(type => type.value === formData.businessType)?.label || '' } : undefined}
            onChange={(option) =>
              setFormData({ ...formData, businessType: option?.value || '' })
            }
            options={businessTypes}
            placeholder="Select a type"
          />

          <Input
            id="businessOverview"
            name="businessOverview"
            type="textarea"
            label="Business Overview"
            required
            value={formData.businessOverview}
            onChange={(e) =>
              setFormData({ ...formData, businessOverview: e.target.value })
            }
            placeholder="Enter business overview"
          />

          <Input
            id="established"
            name="established"
            type="number"
            label="Established Year"
            required
            value={formData.established}
            onChange={(e) =>
              setFormData({ ...formData, established: e.target.value })
            }
            placeholder="Enter established year"
          />

          <Input
            id="address"
            name="address"
            type="text"
            label="Address"
            required
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            placeholder="Enter address"
          />

          <Input
            id="owner"
            name="owner"
            type="text"
            label="Owner Name"
            required
            value={formData.owner}
            onChange={(e) =>
              setFormData({ ...formData, owner: e.target.value })
            }
            placeholder="Enter owner name"
          />

          <Input
            id="email"
            name="email"
            type="email"
            label="Email Address"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Enter email address"
          />

          <Input
            id="password"
            name="password"
            type="password"
            label="Password"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Enter password"
          />

          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            required
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            placeholder="Confirm your password"
          />

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-900">
              Business Logo
            </label>
            <div className="flex items-center space-x-4">
              <div 
                className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden"
                onClick={() => fileInputRef.current?.click()}
              >
                {logoPreview ? (
                  <Image
                    src={logoPreview}
                    alt="Logo preview"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-gray-500 text-sm">Click to upload</div>
                    <div className="text-gray-400 text-xs">PNG, JPG up to 5MB</div>
                  </div>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                className="hidden"
              />
            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full mt-6"
            disabled={registerMutation.isPending}
          >
            {registerMutation.isPending ? 'Creating Account...' : 'Create Account'}
          </Button>
        </form>
      </div>
    </div>
  );
}
