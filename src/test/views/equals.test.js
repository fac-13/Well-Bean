const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line

const { equals } = require('../../views/helpers');

test('Test equals helper with truthy expression', (t) => {
  t.ok(equals(1, 1, { fn: () => true, inverse: () => false }), 'should return true if equal');
  t.end();
});

test('Test equals helper with falsy expression', (t) => {
  t.notOk(equals(1, 2, { fn: () => true, inverse: () => false }), 'should return false if not equal');
  t.end();
});
