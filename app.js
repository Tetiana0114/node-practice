const express = require('express');
const { globalErrorHandler } = require('./middlewares/globalErrorHandler');
const { notFoundHandler } = require('./middlewares/notFoundHandler');
const { router } = require('./router/rootRouter');

const app = express();

app.use(express.json());

app.use('/api', router);

// app.use('/', (req, res, next) => {
//     console.log('hello from middleware');
//     next();
// });

// app.use('/', (req, res, next) => {
//     console.log('hello from other middleware');
//     next();
// });

app.use(notFoundHandler);

app.use(globalErrorHandler);

module.exports = { app };