const Joi = require("joi");

const productValidation = (data) => {
  const schema = Joi.object({
    _id: Joi.string(),
    productName: Joi.string().min(3).max(50).required(),
    productShortCode: Joi.string().min(3).max(50).required(),
    category: Joi.string().required(),
    price: Joi.number().required(),
    quantity: Joi.number().required(),
    description: Joi.string().min(3).max(250).allow(''),
    imageUrl: Joi.string().min(3).max(250).allow(''),
    isBestAchieved: Joi.boolean().required(),
    createdDate: Joi.date(),
    origin: Joi.string().required(),
  });

  return schema.validate(data);
};


module.exports = {
    productValidation
};
