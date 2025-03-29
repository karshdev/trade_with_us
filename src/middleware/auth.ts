import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export async function withAuth(
  request: NextRequest,
  handler: (req: NextRequest) => Promise<NextResponse>
) {
  try {
    const token = cookies().get('token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret');
    
    // Add user info to request
    request.headers.set('user', JSON.stringify(decoded));
    
    return await handler(request);
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid token' },
      { status: 401 }
    );
  }
} 