const router = require('express').Router();
const { NotFoundError } = require('../utils/NotFoundError');
const { WRONG_PATH_MESSAGE } = require('../utils/constants');
const calendarRoutes = require('./calendar');
const nodemailerRoutes = require('./appointment');

// роуты для отправки сообщений о записи на почту
router.use(nodemailerRoutes);

// роуты для работы с календарем
router.use(calendarRoutes);

// oбработка неправильного пути
router.use((req, res, next) => {
  next(new NotFoundError(WRONG_PATH_MESSAGE));
});

module.exports = router;
