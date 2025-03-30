import { NextResponse } from 'next/server';
import { ProfileService } from '@/services/profileService';
import { CreateProfileData } from '@/services/profileService';
import { writeFile } from 'fs/promises';
import path from 'path';
import { existsSync, mkdir } from 'fs';
const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
if (!existsSync(uploadsDir)) {
  mkdir(uploadsDir, { recursive: true });
}
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const profileData: CreateProfileData = {
      businessName: formData.get('businessName')?.toString() || '',
      businessOverview: formData.get('businessOverview')?.toString() || '',
      businessType: formData.get('businessType')?.toString() || '',
      established: parseInt(formData.get('established')?.toString() || '0', 10),
      address: formData.get('address')?.toString() || '',
      owner: formData.get('owner')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      password: formData.get('password')?.toString() || '',
    };

    const logo = formData.get('logo') as File;
    const banner = formData.get('banner') as File;
    let imagePath = '';

    const profile = await ProfileService.createProfile(profileData);
   const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
      const filename = `${uniqueSuffix}-${logo.name}`;
      const filepath = path.join(uploadsDir, filename);
    // Handle file uploads if present
    if (logo) {
      const bytes = await logo.arrayBuffer();
      const buffer = Buffer.from(bytes);
       await writeFile(filepath, buffer);
           imagePath = `/uploads/${filename}`;
         }
    
    if (banner) {
      await ProfileService.updateProfileImage(profile._id, 'banner', banner.name);
    }

    return NextResponse.json(profile, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const profiles = await ProfileService.getProfiles();
    return NextResponse.json(profiles);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 