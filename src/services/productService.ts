import Product from '@/lib/db/models/Product';

export class ProductService {
  static async getProducts() {
    return await Product.find({});
  }

  static async getProductById(id: string) {
    return await Product.findById(id);
  }

  static async createProduct(productData: {
    productName: string;
    origin: string;
    packingDetails: string;
    forecast: string;
    colour: string;
    cultivationType: string;
    moisture: string;
    formAndCut: string;
    image: string;
    profileId: string;
  }) {
    return await Product.create(productData);
  }

  static async updateProduct(id: string, updateData: Partial<{
    productName: string;
    origin: string;
    packingDetails: string;
    forecast: string;
    colour: string;
    cultivationType: string;
    moisture: string;
    formAndCut: string;
    image: string;
  }>) {
    return await Product.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true }
    );
  }

  static async getProductsByProfileId(profileId: string) {
    return await Product.find({ profileId });
  }
} 