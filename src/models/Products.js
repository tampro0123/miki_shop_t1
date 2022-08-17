const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: Array, required: true },
    rating: { type: Object, default: { rate: '', count: 0 } },
    category: { type: String, required: true },
    storage: {type: Array, required: true, default: [{
      size: { type: String, required: true},
      quantity: { type: Number, required: true},
      price: { type: Number, required: true},
    }]},
    discount: { type: Number, required: true, min: 0, max: 100, default: 0 },
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    timestamps: true,
    collection: 'products',
  }
);

module.exports = mongoose.models.Products || mongoose.model('Products', ProductSchema);
