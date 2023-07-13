require('dotenv').config();
const jwt = require('jsonwebtoken');
const { NoAuthorizedError } = require('../utils/errors/NoAuthorized401');

const { JWT_SECRET = 'some-secret-key' } = process.env;

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new NoAuthorizedError('Authorization required'));
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return next(new NoAuthorizedError('Authorization required !'));
  }

  req.user = payload;

  return next();
};

module.exports = { auth };
