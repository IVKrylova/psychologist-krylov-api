const allowedCors = [
  'http://www.alekseykrylov.ru',
  'https://www.alekseykrylov.ru',
  'http://localhost:3000',
  'https://localhost:3000',
];
const { DEFAULT_ALLOWED_METHODS } = require('../utils/constants');

const corsHandler = (req, res, next) => {
  const { origin } = req.headers;

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
  }

  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    res.header('Access-Control-Allow-Credentials', true);
    return res.end();
  }

  return next();
};

module.exports = corsHandler;
