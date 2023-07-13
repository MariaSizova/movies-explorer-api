const STATUS_CREATED_201 = 201;
const STATUS_INCORRECT_VALUE_400 = 400;
const STATUS_NOT_AUTHORIZED_401 = 401;
const STATUS_FORBIDDEN_403 = 403;
const STATUS_NOT_FOUND_404 = 404;
const STATUS_CONFLICT_409 = 409;
const STATUS_ERROR_SERVER_500 = 500;

const corsOptions = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:3002',
  'http://localhost:3003',
  'http://localhost:3004',
  'http://localhost:3005',
  'localhost:3000',
  'localhost:3001',
  'localhost:3002',
  'localhost:3003',
  'localhost:3004',
  'localhost:3005',
];

module.exports = {
  corsOptions,
  STATUS_CREATED_201,
  STATUS_INCORRECT_VALUE_400,
  STATUS_NOT_AUTHORIZED_401,
  STATUS_FORBIDDEN_403,
  STATUS_NOT_FOUND_404,
  STATUS_CONFLICT_409,
  STATUS_ERROR_SERVER_500,
};
