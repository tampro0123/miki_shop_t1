const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RefreshTokenSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    refreshToken: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.RefreshToken || mongoose.model('RefreshToken', RefreshTokenSchema);

