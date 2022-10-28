const router = require('express').Router();
const { celebrate } = require('celebrate');
const { sendRequest, sendFromCalendar } = require('../controllers/appointment');
const { sendRequestValidation, signUpValidation } = require('../utils/celebrateValidation');

router.post('/request', celebrate(sendRequestValidation), sendRequest);

router.post('/signup', celebrate(signUpValidation), sendFromCalendar);

module.exports = router;
