const CartSchema = require("../models/my-cart.model");
const { cartValidation } = require("../helpers/my-cart.validation");

module.exports = {
  getCartItems: async (req, res, next) => {
    const cartItems = await CartSchema.find().populate("productId");

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

    let newCartItem = new CartSchema(req.body);
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

    if (!req.body._id)
      return res.json({ isSuccessful: false, message: "id is required" });

    CartSchema.findByIdAndUpdate(
      req.body._id,
      { quantity: req.body.quantity },
    )
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
    if (!req.body._id)
      return res.json({ isSuccessful: false, message: "id is required" });

    CartSchema.findByIdAndDelete(req.body._id)
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
