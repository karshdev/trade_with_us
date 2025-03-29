import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: true,
    trim: true,
  },
  businessOverview: {
    type: String,
    required: true,
  },
  businessType: {
    type: String,
    required: true,
  },
  established: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    default: undefined,
  },
  banner: {
    type: String,
    default: undefined,
  }
}, {
  timestamps: true,
  strict: true,
  toJSON: {
    transform: function(doc, ret) {
      // Add full URL to logo and banner if they exist
      if (ret.logo) {
        ret.logo = process.env.NEXT_PUBLIC_API_URL + ret.logo;
      }
      if (ret.banner) {
        ret.banner = process.env.NEXT_PUBLIC_API_URL + ret.banner;
      }
      return ret;
    }
  }
});

// Add index for email
profileSchema.index({ email: 1 }, { unique: true });

export type ProfileDocument = mongoose.Document & {
  businessName: string;
  businessOverview: string;
  businessType: string;
  established: number;
  address: string;
  owner: string;
  email: string;
  password: string;
  logo?: string;
  banner?: string;
  createdAt: Date;
  updatedAt: Date;
};

const Profile = mongoose.models.Profile || mongoose.model<ProfileDocument>('Profile', profileSchema);

export default Profile; 