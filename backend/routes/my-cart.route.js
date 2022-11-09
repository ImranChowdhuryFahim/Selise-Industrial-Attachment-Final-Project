const express = require('express');

const controller = require('../controllers/my-cart.controller');

const router = express.Router();

router.route('/api/get-cart-items').get(controller.getCartItems);
module.exports = router;
