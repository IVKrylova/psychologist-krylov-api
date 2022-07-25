// переменные для разработки, аналогичные переменным окружения process.env
const MONGODB_URL_DEV = 'mongodb://localhost:27017/krylovdb';

// сообщения ошибок
const WRONG_PATH_MESSAGE = 'Страница не найдена';
const INTERNAL_ERROR_MESSAGE = 'Внутренняя ошибка сервера';

module.exports = {
  MONGODB_URL_DEV,
  WRONG_PATH_MESSAGE,
  INTERNAL_ERROR_MESSAGE,
};
