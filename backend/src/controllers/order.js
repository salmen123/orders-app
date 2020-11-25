const Order = require('../models/order');

exports.addOrder = async (req, res) => {
  const order = new Order(req.body);
  try {
    await order.save();
    res.status(201).send(order);
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.readOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.send(orders);
  } catch (e) {
    res.status(500).send();
  }
};
