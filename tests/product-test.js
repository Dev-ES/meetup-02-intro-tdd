const test = require('tape');
const Product = require('../lib/product');

test('Product instantiates a new product', (t) => {
  let product = new Product();
  t.ok(product instanceof Product);
  t.end();
});

test('Product#price zero by default', (t) => {
  let product = new Product();
  t.equal(product.price, 0);
  t.end();
});

test('Product#quantity zero by default', (t) => {
  let product = new Product();
  t.equal(product.quantity, 0);
  t.end();
});

test('Product#total calculates amount', (t) => {
  let product = Object.assign(new Product(), { price: 10, quantity: 2 });
  t.equal(product.total(), 20);
  t.end();
});
