const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
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

module.exports = mongoose.models.ProductToken || mongoose.model('ProductToken', ProductSchema);

