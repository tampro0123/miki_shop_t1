const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    content: { type: String },
    rate: { type: Number },
    targetId: { type: Schema.Types.ObjectId, ref: 'Comment' },
    isReplied: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    collection: 'Comments',
  }
);

module.exports = mongoose.models.Comment || mongoose.model('Comment', CommentSchema);
