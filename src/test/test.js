const test = require('tape');
const request = require('supertest');
const router = require('./../app.js');

test('test tape', (t) => {
  t.pass('tape is working');
  t.end();
});

test('Test home route running', (t) => {
  request(router)
    .get('/')
    .expect(200)
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
