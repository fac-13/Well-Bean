const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
const router = require('../../app.js');
// require test database build script
const runDbBuild = require('../../model/database/db_build');

test('Test signup GET route', (t) => {
  request(router)
    .get('/signup')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.ok(res.text.includes('Signup'), 'response contains signup message');
      t.end();
    });
});

test('Test signup POST route - new user', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      request(router)
        .post('/signup')
        .send({
          username: 'haydn',
          password: 'madskillz',
          email: 'email@email.com',
        })
        .expect(200)
        .end((err, res) => {
          t.error(err);
          t.ok(res, 'new user successfully signed up');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});


test('Test signup POST route - existing user', (t) => {
  runDbBuild()
    .then((dbResponse) => {
      t.ok(dbResponse, 'database built');
      request(router)
        .post('/signup')
        .send({
          username: 'Dipsy',
          email: 'dipsy@winky.com',
          password: 'password123',
          confirmPassword: 'password12',
        })
        .expect(200)
        .end((error, response) => {
          t.error(error);
          t.ok(response, 'warning issued that user exists');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});
