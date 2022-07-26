const { sendMail } = require('../utils/nodemailer');
const { BAD_REQUEST_MESSAGE } = require('../utils/constants');
const { BadRequestError } = require('../utils/BadRequestError');

// отправка сообщения из формы на почту
module.exports.sendRequest = (req, res, next) => {
  const { name, phone, type } = req.body;
  const options = {
    subject: 'Запись на прием с формы сайта',
    text: `Имя: ${name}, телефон: ${phone}, формат консультации: ${type}`,
  };

  sendMail(options)
    .then((info) => info)
    .catch((err) => {
      if (err.statusCode === 404 || err.name === 'ValidationError') {
        next(new BadRequestError(BAD_REQUEST_MESSAGE));
      } else {
        next(err);
      }
    });
};
