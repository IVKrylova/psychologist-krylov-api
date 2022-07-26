const { EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  },
  {
    from: EMAIL_USER,
    to: EMAIL_TO,
  },
);

function sendMail(options) {
  return new Promise((resolve, reject) => {
    transporter.sendMail(options, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
}

module.exports = { sendMail };
