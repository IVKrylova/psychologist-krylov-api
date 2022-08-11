# Бэкенд сайта психолога Алексея Крылова
Фронтенд можно посмотреть [здесь](https://github.com/IVKrylova/psychologist-krylov).
<br>

## Описание
Проект - бэкенд для сайта психолога. Бэкенд обрабатывает запрос на получение всех записей на прием, отправляет заявки на консультацию на почту психолога, добавляет запись на прием в базу данных.

## Используемые технологии
1. Express.js
2. MongoDB
3. REST API

## Инструменты
1. MongoDB Compass
2. Postman
   
## Схемы и модели
В проекте одна сущность - записи на прием. Поля её схемы:
* день - число, обязательное поле;
* месяц - строка, обязательное поле;
* время - строка, обязательное поле;
* имя клиента - строка от 2 до 40 символов латиницей или кириллицей, обязательное поле;
* телефон клиента - строка от 9 до 12 цифр, обязательное поле;
* тип консультации - строка, обязательное поле.<br>
  
Каждый документ хранится в базе 60 дней.

## Роуты
В проекте четыре роута:
* POST /request - отправляет сообщение из формы для заявки на почту психолога;
* POST /signup - отправляет сообщение о записи через календарь на почту психолога;
* GET /calendar - получает все записи на прием;
* POST /calendar - добавляет запись через календарь.

## Ошибки и безопасность
* Реализована централизованная обработка ошибок, созданы конструкторы 404 и 400 ошибок.
* Для защиты приложения от веб-уязвимостей путем соответствующей настройки заголовков HTTP используется npm helmet.
* Установлен лимит запросов в 10 запросов за 10 минут с одного IP с помощью npm limiter.
* Приходящие на сервер запросы валидируются с помощью Joi и celebrate.
* Данные валидируются на уровне схемы. 

## Планы по доработке проекта
* Развернуть сервер на VDS.
* Настроить взаимодействие фронтенда и бэкенда в рамках одного проекта. 
