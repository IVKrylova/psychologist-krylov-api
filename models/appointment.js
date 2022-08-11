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
    maxlength: 40,
    minlength: 2,
    pattern: '[A-Za-zА-Яа-яёЁ]+',
  },
  phone: {
    type: String,
    required: true,
    pattern: '[0-9]+',
    minlength: 9,
    maxlength: 12,
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
