const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  day: {
    type: Number,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  // время жизни - месяц в секундах
  expire_at: {
    type: Date,
    default: Date.now,
    expires: 60 * 60 * 24 * 31,
  },
});

module.exports = mongoose.model('appointment', appointmentSchema);
