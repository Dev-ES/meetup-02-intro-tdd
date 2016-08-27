const test = require('tape');
const ShoppingCart = require('../lib/shopping-cart');

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

test('ShoppingCart#total returns the amount of items with quantity equal 1', (t) => {
  let cart = new ShoppingCart();
  cart.add({ price: 4.0, quantity: 1 });
  cart.add({ price: 5.5, quantity: 1 });
  cart.add({ price: 6.8, quantity: 1 });
  t.equal(cart.total(), 16.3);
  t.end();
});

test('ShoppingCart#total returns the amount of items with different quantities', (t) => {
  let cart = new ShoppingCart();
  cart.add({ price: 4.0, quantity: 1 });
  cart.add({ price: 5.5, quantity: 11 });
  cart.add({ price: 6.8, quantity: 3 });
  t.equal(cart.total(), 84.9);
  t.end();
});

test('ShoppingCart#remove does nothing when items are not present', (t) => {
  let cart = new ShoppingCart();
  cart.remove('ketchup');
  t.equal(cart.items.length, 0);
  t.end();
});

test('ShoppingCart#remove does nothing when name given is not present', (t) => {
  let cart = new ShoppingCart();
  cart.add({ name: 'chocolate' });
  cart.remove('ketchup');
  t.equal(cart.items.length, 1);
  t.end();
});

test('ShoppingCart#remove removes item when name given is present', (t) => {
  let cart = new ShoppingCart();
  cart.add({ name: 'chocolate' });
  cart.add({ name: 'ketchup' });
  cart.remove('chocolate');
  t.equal(cart.items.length, 1);
  t.end();
});
