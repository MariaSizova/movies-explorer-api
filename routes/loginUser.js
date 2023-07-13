const loginUserRoute = require('express').Router();

const { loginUser } = require('../controllers/users');
const { loginUserValidation } = require('../utils/validationJoi/userValidation');

loginUserRoute.post('/signin', loginUserValidation, loginUser);

module.exports = { loginUserRoute };
