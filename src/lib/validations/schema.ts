import { z } from 'zod';

export const profileSchema = z.object({
  businessName: z.string().min(2, 'Business name must be at least 2 characters'),
  businessOverview: z.string().min(10, 'Business overview must be at least 10 characters'),
  businessType: z.string().min(2, 'Business type must be at least 2 characters'),
  established: z.number().min(1800, 'Invalid establishment year').max(new Date().getFullYear(), 'Year cannot be in the future'),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  owner: z.string().min(2, 'Owner name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  logo: z.string().nullable().optional(),
  banner: z.string().nullable().optional(),
});

export const productSchema = z.object({
  productName: z.string().min(2, 'Product name must be at least 2 characters'),
  origin: z.string().min(2, 'Origin must be at least 2 characters'),
  packingDetails: z.string().min(2, 'Packing details must be at least 2 characters'),
  forecast: z.string().min(2, 'Forecast must be at least 2 characters'),
  colour: z.string().min(2, 'Colour must be at least 2 characters'),
  cultivationType: z.string().min(2, 'Cultivation type must be at least 2 characters'),
  moisture: z.string().min(1, 'Moisture must be at least 1 character'),
  formAndCut: z.string().min(2, 'Form and cut must be at least 2 characters'),
  profileId: z.string().min(1, 'Profile ID is required')
}); 