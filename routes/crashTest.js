const crashTestPageRoute = require('express').Router();

crashTestPageRoute.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('The server is about to fail');
  }, 0);
});

module.exports = { crashTestPageRoute };
