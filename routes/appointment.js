const router = require('express').Router();
const { sendRequest, sendFromCalendar } = require('../controllers/appointment');

// отправка сообщения из формы на почту
router.post('/request', sendRequest);

router.post('/signup', sendFromCalendar);

module.exports = router;
