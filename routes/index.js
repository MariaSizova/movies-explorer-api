// Импорт роутеров
const router = require('express').Router();
const users = require('./users');
const movies = require('./movies');

// Импорт миддлвэра для авторизации
const auth = require('../middlewares/auth');

// Импорт кастомного класса ошибок NotFoundError
const NotFoundError = require('../errors/NotFoundError');

// Импорт контроллеров и валидаторов
const { createUser, login, logout } = require('../controllers/users');
const { createUserValidator, loginValidator } = require('../middlewares/validators/userValidator');

// роуты, не требующие авторизации - регистрация и логин
router.post('/signup', createUserValidator, createUser); // добавили роутер для регистрации
router.post('/signin', loginValidator, login); // добавили роутеры для авторизации

// роуты, которым авторизация нужна - users и movies
router.use('/users', auth, users); // добавили роутеры для пользователей
router.use('/movies', auth, movies); // добавили роутеры для фильмов
router.get('/signout', auth, logout); // добавили роутер для выхода из системы (очищения куки)

// роут для запросов по несуществующим URL
router.use('*', auth, (req, res, next) => {
  next(new NotFoundError('Ресурс не найден. Проверьте URL и метод запроса'));
});

module.exports = router; // экспортировали этот роутер
