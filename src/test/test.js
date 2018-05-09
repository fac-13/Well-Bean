const tape = require('tape');
const request = require('supertest');
const router = require('./../app.js');

tape('test tape', (t) => {
  t.pass('tape is working');
  t.end();
});
