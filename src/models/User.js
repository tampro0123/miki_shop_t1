const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require("./Products");

const UserSchema = new Schema(
  {
    googleId: { type: String, default: '' },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    phoneNumber: { type: String, required: true, default: '' },
    gender: { type: String, default: 'other' },
    birthday: { type: Date, required: true },
    password: { type: String, required: true, minLength: 8 },
    role: { type: String, default: 'user' },
    avatar: { type: String, required: true, default: 'https://res.cloudinary.com/miki-shop-dev/image/upload/v1660383816/users/jnzskcdcgw64n3lorpro.jpg' },
    cart: [
      {
        _id: false,
        product: { type: Schema.Types.ObjectId, ref: "Products" },
        size: { type: String, required: true },
        quantity: { type: Number, required: true },
        name: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
  },
  {
    timestamps: true,
    collection: 'users',
  }
);

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
