const userRoutes = require('express').Router();

const {
  getUserID,
  updateUser,
} = require('../controllers/users');
const { updateUserValidation } = require('../utils/validationJoi/userValidation');

userRoutes.get('/users/me', getUserID);

userRoutes.patch('/users/me', updateUserValidation, updateUser);

module.exports = { userRoutes };
