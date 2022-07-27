const router = require('express').Router();
const { signup } = require('../controllers/calendar');

// добавление записи через календарь
router.post('/calendar', signup);

module.exports = router;
