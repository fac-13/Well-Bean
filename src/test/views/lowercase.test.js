const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line

const { lowercase } = require('../../views/helpers');

test('Test lowercase helper', (t) => {
  const actual = lowercase('Capital');
  const expected = 'capital';
  t.equal(actual, expected, 'should return a string in all lowercase');
  t.end();
});
