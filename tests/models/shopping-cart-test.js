const test = require('tape');
const ShoppingCart = require('../../lib/models/shopping-cart');

test('ShoppingCart instantiates a new shopping cart', (t) => {
  t.plan(2);
  let cart = new ShoppingCart();
  t.ok(cart instanceof ShoppingCart, 'should be a ShoppingCart');
  t.equal(cart.items.length, 0, 'should have 0 items by default');
});

test('ShoppingCart#add adds one product item', (t) => {
  let cart = new ShoppingCart();
  cart.add({ name: 'chocolate', price: 4.0 });
  t.equal(cart.items.length, 1);
  t.equal(cart.items[0].name, 'chocolate');
  t.equal(cart.items[0].price, 4);
  t.end();
});

test('ShoppingCart#add adds many product items', (t) => {
  let cart = new ShoppingCart();
  cart.add({ name: 'chocolate' });
  cart.add({ name: 'ketchup' });
  cart.add({ name: 'mustard' });
  t.equal(cart.items.length, 3);
  let names = cart.items.map(item => item.name);
  t.deepEqual(names, ['chocolate', 'ketchup', 'mustard']);
  t.end();
});

test('ShoppingCart#total returns zero without items', (t) => {
  let cart = new ShoppingCart();
  t.equal(cart.total(), 0);
  t.end();
});

test('ShoppingCart#total returns the amount with one or more items', (t) => {
  let cart = new ShoppingCart();
  cart.add({ price: 4.0 });
  cart.add({ price: 5.5 });
  cart.add({ price: 6.8 });
  t.equal(cart.total(), 16.3);
  t.end();
});
