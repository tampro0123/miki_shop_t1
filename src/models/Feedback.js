const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    content: { type: String, required: true },
    rate: { type: Number, required: true },
    targetId: { type: Schema.Types.ObjectId, required: true, ref: 'FeedBack' },
    isReplied: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    collection: 'feedbacks',
  }
);

module.exports = mongoose.models.Feedback || mongoose.model('Feedback', FeedbackSchema);
