const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    birthday: { type: Date, required: true },
    password: { type: String, required: true, minLength: 8 },
    role: { type: String, default: 'user' },
  },
  {
    timestamps: true,
    collection: 'users',
  }
);

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
