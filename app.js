require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const helmet = require('helmet');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const limiter = require('./utils/limiter');
const errorHandler = require('./middlewares/errorHandler');
const routes = require('./routes/index');
const corsHandler = require('./middlewares/corsHandler');

const { PORT = 3001, MONGODB_URL, NODE_ENV } = process.env;
const { MONGODB_URL_DEV } = require('./utils/constants');

const app = express();

// защита приложения от веб-уязвимостей путем соответствующей настройки заголовков HTTP
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// подключаем логгер запросов
app.use(requestLogger);

// лимит запросов
app.use(limiter);

// CORS
app.use(corsHandler);

// все роуты приложения
app.use(routes);

// подключаем логгер ошибок
app.use(errorLogger);

// обработчик ошибок celebrate
app.use(errors());

// обработка ошибок
app.use(errorHandler);

async function main() {
  await mongoose.connect(NODE_ENV === 'production' ? MONGODB_URL : MONGODB_URL_DEV);

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
}

main();
