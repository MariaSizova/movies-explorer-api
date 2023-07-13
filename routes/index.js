const routes = require('express').Router();

const { notFoundPageRoute } = require('./notFoundPage');
const { crashTestPageRoute } = require('./crashTest');
const { registerUserRoute } = require('./registerUser');
const { loginUserRoute } = require('./loginUser');
const { userRoutes } = require('./users');
const { moviesRoutes } = require('./movies');
const { auth } = require('../middlewares/auth');

routes.use(crashTestPageRoute);

routes.use(registerUserRoute);
routes.use(loginUserRoute);

routes.use(auth);

routes.use(userRoutes);
routes.use(moviesRoutes);

routes.use(notFoundPageRoute);

module.exports = { routes };
