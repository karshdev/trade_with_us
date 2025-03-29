import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verify } from 'jsonwebtoken';
import connectDB from '@/lib/db/mongodb';
import Profile from '@/lib/db/models/Profile';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('token');

    if (!token) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    try {
      const decoded = verify(token.value, JWT_SECRET) as { email: string };
      await connectDB();
      
      // Get the profile ID from the email
      const profile = await Profile.findOne({ email: decoded.email });
      if (!profile) {
        return NextResponse.json(
          { error: 'Profile not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({ 
        authenticated: true, 
        user: decoded,
        profileId: profile._id 
      });
    } catch (error) {
      // Token is invalid or expired
      cookieStore.delete('token');
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Auth check error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 