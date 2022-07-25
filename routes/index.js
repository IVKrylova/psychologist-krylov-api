const router = require('express').Router();
const { NotFoundError } = require('../utils/NotFoundError');
const { WRONG_PATCH_MESSAGE } = require('../utils/constants');

// oбработка неправильного пути
router.use((req, res, next) => {
  next(new NotFoundError(WRONG_PATCH_MESSAGE));
});

module.exports = router;
