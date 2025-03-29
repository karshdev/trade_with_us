# Trade With Us Platform

A mobile-first trading platform built with Next.js 14, TypeScript, and MongoDB. This platform allows traders to showcase their profiles and product catalogs in a clean, professional interface.

## Features

- 📱 Mobile-first design
- 🏢 Business profile management
- 📦 Product catalog
- 🔒 Secure authentication
- 🎨 Modern UI with Tailwind CSS
- 🚀 Fast and responsive

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, MongoDB with Mongoose
- **Authentication**: JWT with bcrypt
- **Image Handling**: Next.js Image Optimization

## Prerequisites

- Node.js 18+ 
- MongoDB (local or Atlas)
- npm or yarn

## Quick Start

1. Clone the repository:
```bash
git clone <repository-url>
cd trade-with-us
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_API_URL=http://localhost:3000
JWT_SECRET=your_jwt_secret
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## API Documentation

### Authentication
```bash
# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "yourpassword"
  }'
```

### Profiles

```bash
# Create Profile
curl -X POST http://localhost:3000/api/profiles \
  -H "Content-Type: application/json" \
  -d '{
    "businessName": "KMG Robust",
    "businessOverview": "KMG Robust is a Planet-Friendly artisan company...",
    "businessType": "Food manufacturing / Farming / Processing / Packing",
    "established": 1998,
    "address": "Whitefield, Bangalore",
    "logo": "/images/logo.png",
    "owner": "John Smith",
    "email": "info@kmgrobust.com",
    "password": "securepassword123"
  }'

# Get Profile
curl http://localhost:3000/api/profiles/{profileId}

# Update Profile
curl -X PUT http://localhost:3000/api/profiles/{profileId} \
  -H "Content-Type: application/json" \
  -d '{
    "businessName": "Updated Business Name"
  }'
```

### Products

```bash
# Create Product
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "productName": "Black Pepper",
    "origin": "Southern Italy",
    "packingDetails": "25kg bags",
    "forecast": "Available year round",
    "colour": "Black",
    "cultivationType": "Organic",
    "moisture": "12%",
    "formAndCut": "Whole",
    "image": "/images/black-pepper.jpg",
    "profileId": "your_profile_id"
  }'

# Get Product
curl http://localhost:3000/api/products/{productId}

# Update Product
curl -X PUT http://localhost:3000/api/products/{productId} \
  -H "Content-Type: application/json" \
  -d '{
    "productName": "Updated Product Name"
  }'
```

## Direct Navigation

You can directly access profiles and products using these URLs:
- Profile page: `http://localhost:3000/profile/{profileId}`
- Product page: `http://localhost:3000/products/{productId}`

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── api/            # API Routes
│   ├── profile/        # Profile Pages
│   └── products/       # Product Pages
├── components/         # React Components
│   ├── ui/            # UI Components
│   └── shared/        # Shared Components
├── services/          # Business Logic
│   ├── profileService.ts
│   └── productService.ts
├── lib/               # Utilities
│   └── db/           # Database Configuration
└── types/            # TypeScript Types
```

## Development

### Code Organization
- **Services**: Business logic is separated into service classes
- **Models**: MongoDB schemas and types
- **Components**: Reusable UI components
- **API Routes**: RESTful endpoints
- **Pages**: Next.js pages and layouts

### Best Practices
- Separation of concerns
- TypeScript for type safety
- Service layer for business logic
- Modular and reusable components
- Error handling and validation
- Secure authentication flow

## Database Schema

### Profile
```typescript
{
  businessName: string;
  businessOverview: string;
  businessType: string;
  established: number;
  address: string;
  logo: string;
  owner: string;
  email: string;
  password: string;
}
```

### Product
```typescript
{
  productName: string;
  origin: string;
  packingDetails: string;
  forecast: string;
  colour: string;
  cultivationType: string;
  moisture: string;
  formAndCut: string;
  image: string;
  profileId: ObjectId;
}
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
