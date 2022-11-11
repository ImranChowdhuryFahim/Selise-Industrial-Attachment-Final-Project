const CartModel = require("../models/my-cart.model");
const { cartValidation } = require("../helpers/my-cart.validation");

module.exports = {
  getCartItems: async (req, res, next) => {
    const cartItems = await CartModel.find().populate("productId","-__v").select('-__v');

    if (!cartItems)
      return res.json({ isSuccessful: false, message: "not found" });

    return res.send({
      isSuccessful: true,
      message: "successfully feched the cart data",
      cartItems,
    });
  },

  addCartItem: async (req, res, next) => {
    const { error } = cartValidation(req.body);
    if (error)
      return res.json({
        isSuccessful: false,
        message: error.details[0].message,
      });

      const alreadyExist = await CartModel.findOne({
        productId:req.body.productId
      });


    if (alreadyExist!==null)
      return res.json({
        isSuccessful: false,
        alreadyExist: true,
        message: "product already exist in cart",
      });

    let newCartItem = new CartModel(req.body);
    await newCartItem
      .save()
      .then(() => {
        return res.json({
          isSuccessful: true,
          message: "successfully added a new cart item",
        });
      })
      .catch((err) => {
        return res.json({
          isSuccessful: true,
          message: "could not add a new cart item",
        });
      });
  },

  updateCartItem: async (req, res, next) => {
    const { error } = cartValidation(req.body);
    if (error)
      return res.json({
        isSuccessful: false,
        message: error.details[0].message,
      });

      CartModel.findOneAndUpdate({productId:req.body.productId}, { quantity: req.body.quantity })
      .then((product) => {
        return res.json({
          isSuccessful: true,
          message: "successfully updated the cart item",
        });
      })
      .catch((err) => {
        return res.json({
          isSuccessful: false,
          message: "could not update the cart item",
        });
      });
  },

  deleteCartItem: async (req, res, next) => {
    const { error } = cartValidation(req.body);
    if (error)
      return res.json({
        isSuccessful: false,
        message: error.details[0].message,
      });

      CartModel.findOneAndDelete({productId:req.body.productId})
      .then(() => {
        return res.json({
          isSuccessful: true,
          message: "successfully deleted the cart item",
        });
      })
      .catch((err) => {
        return res.json({
          isSuccessful: true,
          message: "could not delete the cart item",
        });
      });
  },
};
