const router = require('express').Router();
const { celebrate } = require('celebrate');
const { signup, getAppointments } = require('../controllers/calendar');
const { signUpValidation } = require('../utils/celebrateValidation');

// добавление записи через календарь
router.post('/calendar', celebrate(signUpValidation), signup);
// получение данных из календаря
router.get('/calendar', getAppointments);

module.exports = router;
