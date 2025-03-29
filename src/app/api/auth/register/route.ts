import { NextResponse } from 'next/server';
import { ProfileService, CreateProfileData } from '@/services/profileService';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

// Ensure uploads directory exists
const UPLOADS_DIR = join(process.cwd(), 'public/uploads');

export async function POST(request: Request) {
  try {
    // Ensure uploads directory exists
    if (!existsSync(UPLOADS_DIR)) {
      await mkdir(UPLOADS_DIR, { recursive: true });
    }

    const formData = await request.formData();
    const profileData: Partial<CreateProfileData> = {
      businessName: formData.get('businessName') as string,
      businessOverview: formData.get('businessOverview') as string,
      businessType: formData.get('businessType') as string,
      established: parseInt(formData.get('established') as string, 10),
      address: formData.get('address') as string,
      owner: formData.get('owner') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    // Handle logo upload
    const logoFile = formData.get('logo') as File | null;
    if (logoFile && logoFile instanceof File) {
      try {
        const buffer = Buffer.from(await logoFile.arrayBuffer());
        const fileExt = logoFile.type.split('/')[1];
        const filename = `logo-${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filepath = join(UPLOADS_DIR, filename);
        
        // Save file
        await writeFile(filepath, buffer);
        profileData.logo = `/uploads/${filename}`;
        
        console.log('Logo saved successfully:', profileData.logo);
      } catch (error) {
        console.error('Error saving logo:', error);
        throw new Error('Failed to save logo file');
      }
    }
    
    // Create profile using the ProfileService
    const profile = await ProfileService.createProfile(profileData as CreateProfileData);
    
    return NextResponse.json({
      message: 'Profile created successfully',
      profile: {
        id: profile._id,
        email: profile.email,
        businessName: profile.businessName,
        logo: profile.logo // Include logo in response
      }
    }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 