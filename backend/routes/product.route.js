const express = require('express');

const controller = require('../controllers/product.controller');

const router = express.Router();

router.route('/api/create-product').post(controller.createProduct);
router.route('/api/get-products').get(controller.getProducts);
router.route('/api/get-products').post(controller.getTransformedProducts);
router.route('/api/update-product').put(controller.updateProduct);
router.route('/api/delete-product').delete(controller.deleteProduct);
module.exports = router;
