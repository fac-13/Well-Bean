const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
const router = require('../../app.js');

test('Test home route with loggedIn false', (t) => {
  request(router)
    .get('/')
    .expect(302)
    .expect('Content-Type', 'text/plain; charset=utf-8')
    .end((err, res) => {
      t.error(err);
      t.ok(res.text.includes('/login', 'redirects correctly'));
      t.end();
    });
});

// Promise to sign in & grab the cookie session
const createLoginCookie = new Promise((resolve, reject) => {
  request(router)
    .post('/login')
    .send({
      inputUser: 'tinky@winky.com',
      inputPassword: 'password123',
    })
    .end((error, response) => {
      if (error) {
        reject(error);
      }
      resolve(response.headers['set-cookie']);
    });
});

// Using promise function in test cases.

test('Test home route with loggedIn true', (t) => {
  createLoginCookie.then((cookie) => {
    request(router)
      .get('/')
      .set('cookie', cookie)
      .expect(200)
      .end((err, res) => {
        t.error(err);
        t.ok(res.text.includes('Welcome', 'access to homepage'));
        t.end();
      });
  });
});
