const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: { type: String, required: true},
    description: { type: String, required: true },
    image: { type: Array, required: true },
    rating: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true},
    quantity: { type: Array },
  },
  {
    timestamps: true,
    collection: 'products',
  }
);

module.exports = mongoose.models.ProductToken || mongoose.model('ProductToken', ProductSchema);

