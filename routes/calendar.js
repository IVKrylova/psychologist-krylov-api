const router = require('express').Router();
const { celebrate } = require('celebrate');
const { signup } = require('../controllers/calendar');
const { signUpValidation } = require('../utils/celebrateValidation');

// добавление записи через календарь
router.post('/calendar', celebrate(signUpValidation), signup);

module.exports = router;
