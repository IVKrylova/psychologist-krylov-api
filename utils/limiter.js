const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  // 10 минут
  windowMs: 10 * 60 * 1000,
  // 10 запросов
  max: 10,
});

module.exports = limiter;
