const express = require('express');

const registerUserRoute = express.Router();

const { createUser } = require('../controllers/users');
const { createUserValidation } = require('../utils/validationJoi/userValidation');

registerUserRoute.post('/signup', createUserValidation, createUser);

module.exports = { registerUserRoute };
