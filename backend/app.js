const express = require('express');
const cors = require('cors');
const urlRoutes = require('./routes/urlRoutes');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorMiddleware');
const logger = require('./middleware/logMiddleware');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger); 

app.use('/', urlRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
