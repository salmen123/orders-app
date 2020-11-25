const request = require('supertest');

const app = require('../src/app');
const Order = require('../src/models/order');
const {
  orderOne,
  orderTwo,
  orderThree,
  orderFour,
  setupDatabase
} = require('./fixtures/db');

beforeEach(setupDatabase);

test('Should create order', async () => {
  const response = await request(app)
    .post('/orders')
    .send({
      id: '5',
      address: 'adress5',
      customer: 'customer5',
      title: 'title5'
    })
    .expect(201);
  const orders = await Order.find({});
  expect(orders.length).toEqual(5);
});

test('Should fetch orders', async () => {
  const response = await request(app)
    .get('/orders')
    .send()
    .expect(200);
  expect(response.body.length).toEqual(4);
});
