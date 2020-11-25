const Order = require('../../src/models/order');
// id address customer title
const orderOne = {
  id: '1',
  address: 'adress1',
  customer: 'customer1',
  title: 'title1'
};

const orderTwo = {
  id: '2',
  address: 'adress2',
  customer: 'customer2',
  title: 'title2'
};

const orderThree = {
  id: '3',
  address: 'adress3',
  customer: 'customer3',
  title: 'title3'
};

const orderFour = {
  id: '4',
  address: 'adress4',
  customer: 'customer4',
  title: 'title4'
};

const setupDatabase = async () => {
  // empty db
  await Order.deleteMany();
  // add initial values to db
  await new Order(orderOne).save();
  await new Order(orderTwo).save();
  await new Order(orderThree).save();
  await new Order(orderFour).save();
};


module.exports = {
  orderOne,
  orderTwo,
  orderThree,
  orderFour,
  setupDatabase
};
