require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const IncorrectValue = require('../utils/errors/IncorrectValue400');
const Conflict = require('../utils/errors/Conflict409');
const NotFound = require('../utils/errors/NotFound404');
const { STATUS_CREATED_201 } = require('../utils/constants');

const { JWT_SECRET = 'some-secret-key' } = process.env;

const getUserID = (req, res, next) => {
  const { _id: userId } = req.user;
  User.findById(userId)
    .then((user) => {
      if (!user) {
        throw new NotFound('user not found');
      } else {
        res.send({ user });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new IncorrectValue('incorrect value'));
      } else {
        next(err);
      }
    });
};
const createUser = (req, res, next) => {
  const { email, password, name } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      email,
      password: hash,
      name,
    }))
    .then((user) => res.status(STATUS_CREATED_201).send({
      name: user.name,
      email: user.email,
      _id: user._id,
    }))
    .catch((err) => {
      if (err.code === 11000) {
        next(new Conflict('user already exists'));
        return;
      }
      if (err.name === 'ValidationError') {
        next(new IncorrectValue('incorrect value'));
      } else {
        next(err);
      }
    });
};
const loginUser = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
        expiresIn: '7d',
      });
      res.send({ token });
    })
    .catch(next);
};
const updateUser = (req, res, next) => {
  const { name, email, password } = req.body;
  const { _id: userId } = req.user;
  bcrypt.hash(password, 10)
    .then((hash) => User.findByIdAndUpdate(
      userId,
      { email, password: hash, name },
      { new: true, runValidators: true },
    ))
    .then((user) => res.status(STATUS_CREATED_201).send({
      name: user.name,
      email: user.email,
      _id: user._id,
    }))
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        next(new NotFound('user not found'));
        return;
      }
      if (err.name === 'ValidationError') {
        next(new IncorrectValue('incorrect value'));
      } else {
        next(err);
      }
    });
};
module.exports = {
  getUserID,
  createUser,
  loginUser,
  updateUser,
};
