import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define public routes that don't require authentication
const publicRoutes = [
  '/',
  '/login',
  '/signup',
  '/api/auth/login',
  '/api/auth/register',
  '/api/profiles',
  '/api/profiles/:id',
  '/api/products/:id',
  '/products/:id',
  '/profile/:id'
];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  const { pathname } = request.nextUrl;

  const isPublicRoute = publicRoutes.some(route => 
    route.includes(':id') 
      ? pathname.startsWith(route.replace(':id', '')) 
      : route === pathname
  );

  
  if (isPublicRoute) {
    return NextResponse.next();
  }

  if (!token && !pathname.startsWith('/api')) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
};