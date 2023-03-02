const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  productShortCode: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  description:{
    type: String,
    required: false,
    default: "",
  },
  imageUrl: {
    type: String,
    required: false,
    default: "",
  },
  isBestAchieved: {
    type: Boolean,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  origin: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('product', ProductSchema);
