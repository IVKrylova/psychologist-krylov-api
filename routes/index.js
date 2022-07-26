const router = require('express').Router();
const { NotFoundError } = require('../utils/NotFoundError');
const { WRONG_PATCH_MESSAGE } = require('../utils/constants');
const { sendRequest } = require('../controllers/appointment');

// отправка сообщения из формы на почту
router.post('/request', sendRequest);

// oбработка неправильного пути
router.use((req, res, next) => {
  next(new NotFoundError(WRONG_PATCH_MESSAGE));
});

module.exports = router;
