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
  },
});

module.exports = mongoose.model('appointment', appointmentSchema);
