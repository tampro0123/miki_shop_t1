const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("./Products");
require("./User");

const CartSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    products: [
      {
        _id: false,
        product: { type: Schema.Types.ObjectId, ref: "Products", required: true },
        size: { type: String, required: true },
        quantity: { type: Number, required: true },
        name: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
    payments: { type: Boolean, default: true },
  },
  {
    collection: "carts",
    timestamps: true,
  }
);

module.exports = mongoose.models.Cart || mongoose.model("Cart", CartSchema);
