const CartSchema = require('../models/my-cart.model');

module.exports = {
  getCartItems: async (req, res, next) => {
    const cartItems = await CartSchema.find().select('-_id');

    if (!cartItems) return res.json({ isSuccessful:false, message: 'not found' });

    return res.send({isSuccessful:true, message:'successfully feched the cart data', cartItems});
  },
};
