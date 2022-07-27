const { Joi } = require('celebrate');

const signUpValidation = {
  body: Joi.object().keys({
    day: Joi.number().integer().positive().required(),
    month: Joi.string().required(),
    time: Joi.string().required(),
    name: Joi.string().required(),
    phone: Joi.string().required(),
    type: Joi.string().required(),
  }),
};

const sendRequestValidation = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    phone: Joi.string().required(),
    type: Joi.string().required(),
  }),
};

module.exports = {
  signUpValidation,
  sendRequestValidation,
};
