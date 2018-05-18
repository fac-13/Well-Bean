const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
const router = require('../../app.js');
// require test database build script
const runDbBuild = require('../../model/database/db_build');

test('Test add-message GET route', (t) => {
  request(router)
    .get('/add-message')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.ok(res.text.includes('own'), 'response promts user to add message');
      t.end();
    });
});

test('Test add-message POST route', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      request(router)
        .post('/add-message')
        .send({
          userId: 1,
          message: 'test message',
        })
        .expect(302)
        .end((err, res) => {
          t.error(err);
          t.ok(res, 'response has something from query');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
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


// test('Test add-message POST route with invalid userId', (t) => {
//   runDbBuild()
//     .then((dbRes) => {
//       t.ok(dbRes, 'database built');
//       request(router)
//         .post('/add-message')
//         .send({
//           message: 'test message',
//         })
//         .expect(500)
//         .end((err, res) => {
//           t.error(err);
//           t.ok(res.text.includes('500'), 'response has 500 error message');
//           t.end();
//         });
//     })
//     .catch((e) => {
//       t.error(e);
//       t.end();
//     });
// });

test('Test add-message POST route with empty message body', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      return createLoginCookie;
    })
    .then((cookie) => {
      request(router)
        .post('/add-message')
        .set('cookie', cookie)
        .send({
          message: null,
        })
        .expect(200)
        .end((err, res) => {
          t.error(err);
          t.ok(res.text.includes('Please write'), 'response has error message');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});

test('Test add-message POST route with valid message body and cookie session', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      return createLoginCookie;
    })
    .then((cookie) => {
      request(router)
        .post('/add-message')
        .set('cookie', cookie)
        .send({
          message: 'test message',
        })
        .expect(302)
        .end((err, res) => {
          t.error(err);
          t.ok(res.text.includes('/messages'), 'redirected to messages route');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});
