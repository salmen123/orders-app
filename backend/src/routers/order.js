const express = require('express');

const {
  addOrder,
  readOrders
} = require('../controllers/order');

const router = new express.Router();

router.post('/orders', addOrder);

router.get('/orders', readOrders);

module.exports = router;
