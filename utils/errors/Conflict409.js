const { STATUS_CONFLICT_409 } = require('../constants');

class Conflict extends Error {
  constructor(message) {
    super(message);
    this.statusCode = STATUS_CONFLICT_409;
  }
}

module.exports = Conflict;
