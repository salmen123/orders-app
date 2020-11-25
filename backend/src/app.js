const express = require('express');

const orderRouter = require('./routers/order');
require('./db/mongoose');

const app = express();

app.use(express.json());
app.use(orderRouter);

module.exports = app;
