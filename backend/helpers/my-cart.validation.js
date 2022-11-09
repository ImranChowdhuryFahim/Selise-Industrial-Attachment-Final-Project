const Joi = require("joi");

const cartValidation = (data) => {
  const schema = Joi.object({
    productId: Joi.string().required(),
    quantity: Joi.string().number().required(),
  });

  return schema.validate(data);
};


module.exports = {
    cartValidation
};
