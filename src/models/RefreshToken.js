import mongoose from 'mongoose';

const RefreshTokenSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    refreshToken: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.RefreshToken || mongoose.model('RefreshToken', RefreshTokenSchema);
