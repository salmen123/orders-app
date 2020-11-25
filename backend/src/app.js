const cors = require('cors');
const express = require('express');

const orderRouter = require('./routers/order');
require('./db/mongoose');

const app = express();

app.use(cors());
app.use(express.json());
app.use(orderRouter);

module.exports = app;
