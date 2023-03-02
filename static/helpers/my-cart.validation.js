const Joi = require("joi");

const cartValidation = (data) => {
  const schema = Joi.object({
    _id: Joi.string(),
    productId: Joi.string().required(),
    quantity: Joi.number().required(),
  });

  return schema.validate(data);
};


module.exports = {
    cartValidation
};
