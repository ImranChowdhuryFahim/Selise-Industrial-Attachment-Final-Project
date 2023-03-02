const express = require("express");

const controller = require("../controllers/my-cart.controller");

const router = express.Router();

router.route("/api/get-cart-items").get(controller.getCartItems);
router.route("/api/update-cart-item").put(controller.updateCartItem);
router.route("/api/add-cart-item").post(controller.addCartItem);
router.route("/api/delete-cart-item").delete(controller.deleteCartItem);
module.exports = router;
