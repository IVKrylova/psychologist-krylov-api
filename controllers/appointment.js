const { sendMail } = require('../utils/nodemailer');
const { BAD_REQUEST_MESSAGE } = require('../utils/constants');
const { BadRequestError } = require('../utils/BadRequestError');

module.exports.sendRequest = (req, res, next) => {
  const { name, phone, type } = req.body;
  const options = {
    subject: 'Запись на прием с формы сайта',
    text: `Имя: ${name}, телефон: ${phone}, формат консультации: ${type}`,
  };

  sendMail(options)
    .then((info) => res.send(info))
    .catch((err) => {
      if (err.statusCode === 404 || err.name === 'ValidationError') {
        next(new BadRequestError(BAD_REQUEST_MESSAGE));
      } else {
        next(err);
      }
    });
};

module.exports.sendFromCalendar = (req, res, next) => {
  const {
    day,
    month,
    time,
    name,
    phone,
    type,
  } = req.body;
  const options = {
    subject: 'Запись на прием из календаря',
    text: `Имя: ${name}, телефон: ${phone}, формат консультации: ${type}
      дата: ${day} ${month}, время: ${time}`,
  };

  sendMail(options)
    .then((info) => res.send(info))
    .catch((err) => {
      if (err.statusCode === 404 || err.name === 'ValidationError') {
        next(new BadRequestError(BAD_REQUEST_MESSAGE));
      } else {
        next(err);
      }
    });
};
