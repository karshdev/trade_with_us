import { NextResponse } from 'next/server';
import connectDB from '@/lib/db/mongodb';
import Product from '@/lib/db/models/Product';
import { writeFile } from 'fs/promises';
import { existsSync, mkdir } from 'fs';
import path from 'path';

// Ensure uploads directory exists
const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
if (!existsSync(uploadsDir)) {
  mkdir(uploadsDir, { recursive: true });
}

export async function GET() {
  try {
    await connectDB();
    const products = await Product.find({});
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const formData = await request.formData();

    // Handle file upload
    const image = formData.get('image') as File;
    let imagePath = '';
    
    if (image) {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      // Create unique filename
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
      const filename = `${uniqueSuffix}-${image.name}`;
      const filepath = path.join(uploadsDir, filename);
      
      // Save file
      await writeFile(filepath, buffer);
      imagePath = `/uploads/${filename}`;
    }

    // Create product data
    const productData = {
      productName: formData.get('productName'),
      origin: formData.get('origin'),
      packingDetails: formData.get('packingDetails'),
      forecast: formData.get('forecast'),
      colour: formData.get('colour'),
      cultivationType: formData.get('cultivationType'),
      moisture: formData.get('moisture'),
      formAndCut: formData.get('formAndCut'),
      image: imagePath,
      profileId: formData.get('profileId'), // You'll need to get this from the authenticated user's session
    };

    // Validate required fields
    if (!productData.productName || !productData.origin || !productData.packingDetails || 
        !productData.forecast || !productData.colour || !productData.cultivationType || 
        !productData.moisture || !productData.formAndCut || !productData.image) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const product = await Product.create(productData);
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal Server Error' },
      { status: 500 }
    );
  }
} 