const router = require('express').Router();
const { celebrate } = require('celebrate');
const { signup, getAppointments } = require('../controllers/calendar');
const { signUpValidation } = require('../utils/celebrateValidation');

router.post('/calendar', celebrate(signUpValidation), signup);
router.get('/calendar', getAppointments);

module.exports = router;
