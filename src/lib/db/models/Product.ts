import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  packingDetails: {
    type: String,
    required: true,
  },
  forecast: {
    type: String,
    required: true,
  },
  colour: {
    type: String,
    required: true,
  },
  cultivationType: {
    type: String,
    required: true,
  },
  moisture: {
    type: String,
    required: true,
  },
  formAndCut: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: true,
  }
}, {
  timestamps: true,
});

export type ProductDocument = mongoose.Document & {
  productName: string;
  origin: string;
  packingDetails: string;
  forecast: string;
  colour: string;
  cultivationType: string;
  moisture: string;
  formAndCut: string;
  image: string;
  profileId: mongoose.Types.ObjectId;
};

const Product = mongoose.models.Product || mongoose.model<ProductDocument>('Product', productSchema);

export default Product; 