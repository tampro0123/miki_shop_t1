const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require("./Products");

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    birthday: { type: Date, required: true },
    password: { type: String, required: true, minLength: 8 },
    role: { type: String, default: 'user' },
    image: { type: String, required: true, default: 'https://res.cloudinary.com/miki-shop-dev/image/upload/v1660383816/users/jnzskcdcgw64n3lorpro.jpg' },
    cart: [
      {
        _id: false,
        product: { type: Schema.Types.ObjectId, ref: "Products" },
        size: { type: String, required: true },
        quantity: { type: Number, required: true },
        name: { type: String, required: true },
<<<<<<< HEAD
        price: { type: Number, required: true },
        image: { type: String, required: true },
=======
        image: { type: String, required: true },
        price: { type: Number, required: true },
>>>>>>> a261745fd2798bb761fd4fd3674e3412c897200c
      },
    ],
  },
  {
    timestamps: true,
    collection: 'users',
  }
);

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
