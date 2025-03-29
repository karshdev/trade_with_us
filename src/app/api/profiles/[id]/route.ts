import { NextResponse } from 'next/server';
import connectDB from '@/lib/db/mongodb';
import Profile from '@/lib/db/models/Profile';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
  const { id } = await Promise.resolve(params);

    await connectDB();
    const profile = await Profile.findById(id).select('-password');
    
    if (!profile) {
      return NextResponse.json(
        { error: 'Profile not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(profile);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    await connectDB();

    const profile = await Profile.findByIdAndUpdate(
      params.id,
      { $set: body },
      { new: true }
    ).select('-password');

    if (!profile) {
      return NextResponse.json(
        { error: 'Profile not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(profile);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 