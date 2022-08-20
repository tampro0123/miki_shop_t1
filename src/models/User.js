const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },

    username: { type: String, required: true },
    birthday: { type: Date, required: true },
    password: { type: String, required: true, minLength: 8 },
    role: { type: String, default: 'user' },
    image: {
      type: String,
      required: true,
      default: 'https://res.cloudinary.com/miki-shop-dev/image/upload/v1660383816/users/jnzskcdcgw64n3lorpro.jpg',
    },
  },
  {
    timestamps: true,
    collection: 'users',
  }
);

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
