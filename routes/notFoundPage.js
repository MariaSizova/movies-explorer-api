const notFoundPageRoute = require('express').Router();
const NotFound = require('../utils/errors/NotFound404');

notFoundPageRoute.all('*', (req, res, next) => {
  next(new NotFound('url not found'));
});

module.exports = { notFoundPageRoute };
