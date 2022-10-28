const Appointment = require('../models/appointment');
const { BAD_REQUEST_MESSAGE } = require('../utils/constants');
const { BadRequestError } = require('../utils/BadRequestError');

module.exports.signup = (req, res, next) => {
  const {
    day,
    month,
    time,
    name,
    phone,
    type,
  } = req.body;

  Appointment.create({
    day,
    month,
    time,
    name,
    phone,
    type,
  })
    .then((appointment) => res.send({ appointment }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(BAD_REQUEST_MESSAGE));
      } else {
        next(err);
      }
    });
};

module.exports.getAppointments = (req, res, next) => {
  Appointment.find()
    .then((data) => {
      const depersonalizedData = data.map((appointment) => {
        const { month, day, time } = appointment;
        return { month, day, time };
      });

      res.send(depersonalizedData);
    })
    .catch(next);
};
