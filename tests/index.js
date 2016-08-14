const test = require('tape');

test('pass', (t) => {
  t.plan(1);
  t.ok(true);
});

test('fail', (t) => {
  t.plan(1);
  t.ok(false);
});
