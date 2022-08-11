const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: { type: String, required: true},
    description: { type: String, required: true },
    images: { type: Array, required: true },
    rating: { type: Object, default: { rate: "", count: 0}},
    category: { type: String, required: true},
    storage: { type: Array, required: true},
    discount: {type: Number, required: true, min: 0, max: 100, default: 0}
  },
  {
    timestamps: true,
    collection: 'products',
  }
);

module.exports = mongoose.models.Products || mongoose.model('Products', ProductSchema);

