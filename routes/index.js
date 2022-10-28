const router = require('express').Router();
const { NotFoundError } = require('../utils/NotFoundError');
const { WRONG_PATH_MESSAGE } = require('../utils/constants');
const calendarRoutes = require('./calendar');
const nodemailerRoutes = require('./appointment');

router.use(nodemailerRoutes);
router.use(calendarRoutes);
router.use((req, res, next) => {
  next(new NotFoundError(WRONG_PATH_MESSAGE));
});

module.exports = router;
