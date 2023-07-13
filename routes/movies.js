const moviesRoutes = require('express').Router();

const {
  getMyMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');
const {
  createMovieValidation,
  deleteMovieValidation,
} = require('../utils/validationJoi/moviesValidation');

moviesRoutes.get('/movies', getMyMovies);

moviesRoutes.post('/movies', createMovieValidation, createMovie);

moviesRoutes.delete('/movies/:_id', deleteMovieValidation, deleteMovie);

module.exports = {
  moviesRoutes,
};
