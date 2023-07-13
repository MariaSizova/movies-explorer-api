const Forbidden = require('../utils/errors/Forbidden403');
const NotFound = require('../utils/errors/NotFound404');
const Movie = require('../models/Movie');
const { STATUS_CREATED_201 } = require('../utils/constants');
const IncorrectValue = require('../utils/errors/IncorrectValue400');
// как в брифе: 'возвращает все сохранённые текущим  пользователем фильмы'
const getMyMovies = (req, res, next) => {
  const { _id: userId } = req.user;
  Movie.find({ owner: userId }).then((movie) => {
    res.send({ movie });
  })
    .catch((err) => {
      next(err);
    });
};
const createMovie = (req, res, next) => {
  const {
    country, director, duration, year, description, image,
    trailerLink, thumbnail, movieId, nameRU, nameEN,
  } = req.body;
  const { _id: userId } = req.user;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    owner: userId,
  })
    .then((movie) => { res.status(STATUS_CREATED_201).send({ data: movie }); })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new IncorrectValue('incorrect value'));
      } else {
        next(err);
      }
    });
};
const deleteMovie = (req, res, next) => {
  const movieId = req.params;
  const userId = req.user._id;
  Movie.findById(movieId)
    .then((movie) => {
      if (!movie) {
        next(new NotFound('object not found'));
      } else if (userId !== movie.owner.toString()) {
        next(new Forbidden('you do not have the rights to delete this object'));
      } else {
        Movie.deleteOne({ _id: movieId })
          .then(() => res.send({ message: 'successful deletion' }))
          .catch((err) => {
            next(err);
          });
      }
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  getMyMovies,
  createMovie,
  deleteMovie,
};
