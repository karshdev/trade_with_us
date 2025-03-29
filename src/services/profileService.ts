import connectToDatabase from '@/lib/db/mongodb';
import Profile from '@/lib/db/models/Profile';
import { profileSchema } from '@/lib/validations/schema';
import { ZodError } from 'zod';
import bcrypt from 'bcryptjs';

export interface CreateProfileData {
  businessName: string;
  businessOverview: string;
  businessType: string;
  established: number;
  address: string;
  owner: string;
  email: string;
  password: string;
  logo?: string;
}

export interface UpdateProfileData {
  businessName?: string;
  businessOverview?: string;
  businessType?: string;
  established?: number;
  address?: string;
  owner?: string;
  email?: string;
  password?: string;
}

export class ProfileService {
  static async createProfile(data: CreateProfileData) {
    try {
      // Validate data against schema
      const validatedData = profileSchema.parse(data);

      // Hash password
      const hashedPassword = await bcrypt.hash(validatedData.password, 10);

      // Connect to database
      await connectToDatabase();

      // Create profile using Mongoose model
      const profile = await Profile.create({
        ...validatedData,
        password: hashedPassword,
      });

      // Return profile without sensitive data
      const profileObject = profile.toObject();
      delete profileObject.password;
      return profileObject;
    } catch (error) {
      if (error instanceof ZodError) {
        throw new Error('Validation failed: ' + error.errors.map(e => e.message).join(', '));
      }
      throw error;
    }
  }

  static async getProfiles() {
    await connectToDatabase();
    return Profile.find({}, { password: 0 }).lean();
  }

  static async getProfileById(id: string) {
    await connectToDatabase();
    const profile = await Profile.findById(id).select('-password').lean();
    if (!profile) {
      throw new Error('Profile not found');
    }
    return profile;
  }

  static async getProfileByEmail(email: string) {
    await connectToDatabase();
    return Profile.findOne({ email }).lean();
  }

  static async verifyPassword(inputPassword: string, hashedPassword: string) {
    return bcrypt.compare(inputPassword, hashedPassword);
  }

  static async updateProfile(id: string, data: Partial<CreateProfileData>) {
    await connectToDatabase();
    
    // If password is being updated, hash it
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    const profile = await Profile.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    ).select('-password').lean();

    if (!profile) {
      throw new Error('Profile not found');
    }

    return profile;
  }

  static async updateProfileImage(id: string, type: 'logo' | 'banner', imagePath: string) {
    await connectToDatabase();
    
    const profile = await Profile.findByIdAndUpdate(
      id,
      {
        $set: {
          [`${type}Path`]: imagePath,
          updatedAt: new Date(),
        },
      },
      { new: true }
    ).select('-password');

    if (!profile) {
      throw new Error('Profile not found');
    }

    return profile;
  }
} 