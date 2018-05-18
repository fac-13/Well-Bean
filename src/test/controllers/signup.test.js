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
      t.ok(res.text.includes('ignup'), 'response contains signup message');
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
          confirmPassword: 'madskillz',
        })
        .expect(302)
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


test('Test signup POST route - username already exists', (t) => {
  runDbBuild()
    .then((dbResponse) => {
      t.ok(dbResponse, 'database built');
      request(router)
        .post('/signup')
        .send({
          username: 'Dipsy',
          email: 'dipsy@winky.com',
          password: 'password123',
          confirmPassword: 'password123',
        })
        .expect(200)
        .end((err, res) => {
          t.error(err);
          t.ok(res.text.includes('Username already taken'), 'warning issued that user exists');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});

test('Test signup POST route - email already exists', (t) => {
  runDbBuild()
    .then((dbResponse) => {
      t.ok(dbResponse, 'database built');
      request(router)
        .post('/signup')
        .send({
          username: 'Dip',
          email: 'dipsy@winky.com',
          password: 'password123',
          confirmPassword: 'password123',
        })
        .expect(200)
        .end((err, res) => {
          t.error(err);
          t.ok(res.text.includes('Email already'), 'warning issued that email exists');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});


test('Test signup POST route - passwoards don\'t match', (t) => {
  runDbBuild()
    .then((dbResponse) => {
      t.ok(dbResponse, 'database built');
      request(router)
        .post('/signup')
        .send({
          username: 'Dipsy',
          email: 'dipsy@winky.com',
          password: 'password123',
          confirmPassword: 'password1',
        })
        .expect(200)
        .end((err, res) => {
          t.error(err);
          t.ok(res.text.includes('passwords'), 'warning issued that passwords don\'t match');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});


test('Test signup POST route - confirmed password empty', (t) => {
  runDbBuild()
    .then((dbResponse) => {
      t.ok(dbResponse, 'database built');
      request(router)
        .post('/signup')
        .send({
          username: 'Dipsy',
          email: 'dipsy@winky.com',
          password: 'password123',
        })
        .expect(200)
        .end((err, res) => {
          t.error(err);
          t.ok(res.text.includes('passwords'), 'warning issued that passwords don\'t match');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});

test('Test signup POST route - empty fields', (t) => {
  runDbBuild()
    .then((dbResponse) => {
      t.ok(dbResponse, 'database built');
      request(router)
        .post('/signup')
        .send({
          username: 'Dipsy',
        })
        .expect(200)
        .end((err, res) => {
          t.error(err);
          t.ok(res.text.includes('can not be empty'), 'warning issued that fields are missing');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});


test('Test signup POST route - wrong password type', (t) => {
  runDbBuild()
    .then((dbResponse) => {
      t.ok(dbResponse, 'database built');
      request(router)
        .post('/signup')
        .send({
          username: 'Dipsy',
          email: 'dipsy@winky.com',
          password: true,
          confirmPassword: true,
        })
        .expect(500)
        .end((err, res) => {
          t.error(err);
          t.ok(res.text.includes('500'), '500 warning issued');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});
