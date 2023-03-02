const ProductModel = require("../models/product.model");
const { productValidation } = require("../helpers/product.validation");

module.exports = {
  findProduct: async (req, res, next) => {
    const id = req.params.id;

    if (!id)
      return res.json({ isSuccessful: false, message: "id is required" });

      ProductModel.findById(id).select('-__v').then((result)=>{

      return res.send({
        isSuccessful: true,
        message: "successfully feched the product data",
        product:result,
      })
    }).catch((err)=>{
      return res.json({ isSuccessful: false, message: "not found" });
    })

  },
  getProducts: async (req, res, next) => {
    const products = await ProductModel.find().select("-__v");

    if (!products)
      return res.json({ isSuccessful: false, message: "not found" });

    return res.send({
      isSuccessful: true,
      message: "successfully feched the product data",
      products,
    });
  },
  getTransformedProducts: async (req, res, next) => {
    const { key, order, perPage, page } = req.body;
    const sortPayload = { [key]: [order] };
    const allProducts = await ProductModel.find();

    const products = await ProductModel.find()
      .limit(perPage)
      .skip(perPage * page)
      .sort(sortPayload)
      .select("-__v");

    if (!products)
      return res.json({ isSuccessful: false, message: "not found" });

    return res.send({
      isSuccessful: true,
      message: "successfully feched the product data",
      products,
      totalLength:allProducts.length
    });
  },
  createProduct: async (req, res, next) => {
    const { error } = productValidation(req.body);
    if (error)
      return res.json({
        isSuccessful: false,
        message: error.details[0].message,
      });

    const nameExist = await ProductModel.findOne({
      productName: req.body.productName,
    });
    const shortCodeExist = await ProductModel.findOne({
      productShortCode: req.body.productShortCode,
    });

    if (nameExist || shortCodeExist)
      return res.json({
        isSuccessful: false,
        message: "name or short code already exist",
      });

    const newProduct = new ProductModel(req.body);

    await newProduct
      .save()
      .then(() => {
        return res.json({
          isSuccessful: true,
          message: "successfully created a new product",
        });
      })
      .catch((err) => {
        return res.json({
          isSuccessful: true,
          message: "could not create a new product",
        });
      });
  },

  updateProduct: async (req, res, next) => {
    const { error } = productValidation(req.body);
    if (error)
      return res.json({
        isSuccessful: false,
        message: error.details[0].message,
      });

    if (!req.body._id)
      return res.json({ isSuccessful: false, message: "id is required" });

      ProductModel.findByIdAndUpdate(
      req.body._id,
      { ...req.body },
      { upsert: true, new: true }
    )
      .then((product) => {
        return res.json({
          isSuccessful: true,
          message: "successfully updated the product",
        });
      })
      .catch((err) => {
        return res.json({
          isSuccessful: false,
          message: "could not update the product",
        });
      });
  },

  deleteProduct: async (req, res, next) => {
    if (!req.body._id)
      return res.json({ isSuccessful: false, message: "id is required" });

      ProductModel.findByIdAndDelete(req.body._id)
      .then((product) => {
        return res.json({
          isSuccessful: true,
          message: "successfully deleted the product",
        });
      })
      .catch((err) => {
        return res.json({
          isSuccessful: false,
          message: "could not delete the product",
        });
      });
  },
};
