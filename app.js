require('dotenv').config();

const express = require('express');

const app = express();

const { PORT = 3000 } = process.env;
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const cors = require('cors');
const helmet = require('helmet');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { errorsMiddleware } = require('./middlewares/errors');
const { corsOptions } = require('./utils/constants');
const { routes } = require('./routes');

mongoose.connect('mongodb://127.0.0.1:27017/bitfilmsdb');

app.use(helmet());
app.use(cors({ origin: corsOptions }));
app.use(express.json());
app.use(requestLogger);
app.use(routes);
app.use(errorLogger);
app.use(errors());
app.use(errorsMiddleware);

app.listen(PORT);
