const { STATUS_NOT_AUTHORIZED_401 } = require('../constants');

class NoAuthorizedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = STATUS_NOT_AUTHORIZED_401;
  }
}

module.exports = { NoAuthorizedError };
