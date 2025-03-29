import { NextResponse } from 'next/server';
import { ProfileService } from '@/services/profileService';
import { CreateProfileData } from '@/services/profileService';

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

    const profile = await ProfileService.createProfile(profileData);

    // Handle file uploads if present
    if (logo) {
      await ProfileService.updateProfileImage(profile._id, 'logo', logo.name);
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