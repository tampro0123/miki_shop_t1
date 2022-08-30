const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("./Products");
require("./User");

const BuyerSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    targetId: { type: Schema.Types.ObjectId, ref: 'Products' },
    isFeedback: { type: Boolean, default: false },
}, {
    collection: 'buyers',
    timestamps: true
})

module.exports = mongoose.models.Buyer || mongoose.model('Buyer', BuyerSchema);
