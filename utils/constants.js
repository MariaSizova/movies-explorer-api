// Коды ошибок
const BAD_REQUEST_ERROR_CODE = 400;
const AUTH_ERROR_CODE = 401;
const FORBIDDEN_ERROR_CODE = 403;
const NOT_FOUND_ERROR_CODE = 404;
const CONFLICT_ERROR_CODE = 409;

// Сообщения ошибок
const BAD_REQUEST_ERROR_MESSAGE = 'Некорректные данные при запросе';
const AUTH_ERROR_MESSAGE = 'Проблемы с авторизацией';
const AUTH_ERROR_LOGIN_MESSAGE = 'Неправильные почта или пароль';
const FORBIDDEN_ERROR_MESSAGE = 'Отказано в доступе';
const NOT_FOUND_ERROR_MESSAGE = 'Данные с таким ID не найдены';
const CONFLICT_ERROR_MESSAGE = 'Email должен быть уникальным';

// Регулярное выражение для валидации URL
const REG_EXP = /^https?:\/\/(www\.)?([a-z0-9_-]+)(\.[a-z0-9_-]+).+/i;

// Массив доменов, с которых разрешены кросс-доменные запросы
const ALLOWED_CORS = [
  'https://api.diplom.marisizova.nomoredomains.rocks',
  'http://api.diplom.marisizova.nomoredomains.rocks',
  'http://diplom.marisizova.nomoredomains.rocks',
  'https://diplom.marisizova.nomoredomains.rocks',
  'https://api.nomoreparties.co/beatfilm-movies',
  'https://localhost:3000',
  'http://localhost:3000',
  'http://158.160.107.188',
  'https://158.160.107.188',
];

// Значение для заголовка Access-Control-Allow-Methods по умолчанию (разрешены все типы запросов)
const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

module.exports = {
  BAD_REQUEST_ERROR_CODE,
  AUTH_ERROR_CODE,
  FORBIDDEN_ERROR_CODE,
  NOT_FOUND_ERROR_CODE,
  CONFLICT_ERROR_CODE,
  BAD_REQUEST_ERROR_MESSAGE,
  AUTH_ERROR_MESSAGE,
  AUTH_ERROR_LOGIN_MESSAGE,
  FORBIDDEN_ERROR_MESSAGE,
  NOT_FOUND_ERROR_MESSAGE,
  CONFLICT_ERROR_MESSAGE,
  REG_EXP,
  ALLOWED_CORS,
  DEFAULT_ALLOWED_METHODS,
};
