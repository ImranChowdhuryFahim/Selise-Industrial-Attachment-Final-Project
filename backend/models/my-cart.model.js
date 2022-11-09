const mongoose = require('mongoose');

const { Schema } = mongoose;

const CartSchema = new Schema({
  quantity: {
    type: Number,
    required: true,
  },
  productId: {
    type: mongoose.Types.ObjectId,
  },
});

module.exports = mongoose.model('cart', CartSchema);
