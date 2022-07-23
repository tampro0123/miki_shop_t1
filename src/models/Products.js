import mongoose from 'mongoose';

const ProductsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true},
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true},
  },
  {
    timestamps: true,
    collection: 'products',
  }
);

export default mongoose.models.Products || mongoose.model('Products', ProductsSchema);
