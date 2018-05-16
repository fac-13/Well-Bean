const test = require('tape'); //eslint-disable-line
const request = require('supertest'); //eslint-disable-line
const router = require('../../app.js');
// require test database build script
const runDbBuild = require('../../model/database/db_build');

test('Test add-challenge GET route', (t) => {
  request(router)
    .get('/add-challenge')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.ok(res.text.includes('challenge'), 'response prompts user to add challenge');
      t.end();
    });
});

test('Test add-challenge POST route', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      request(router)
        .post('/add-challenge')
        .send({
          categoryId: 2,
          userId: 1,
          title: 'Add new',
          description: 'This is a new test challenge',
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

test('Test add-challenge POST route with invalid userId', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      request(router)
        .post('/add-challenge')
        .send({
          categoryId: 1,
          userId: 'one',
          title: 'title',
          description: 'description',
        })
        .expect(500)
        .end((err, res) => {
          t.error(err);
          t.ok(res.text.includes('500'), 'response has 500 error message');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});

test('Test add-challenge POST route with empty title', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      request(router)
        .post('/add-challenge')
        .send({
          categoryId: 1,
          userId: 1,
          description: 'description',
        })
        .expect(200)
        .end((err, res) => {
          t.error(err);
          t.ok(res.text.includes('enter'), 'response has correct error message');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});

test('Test add-challenge POST route with empty description', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      request(router)
        .post('/add-challenge')
        .send({
          categoryId: 1,
          userId: 1,
          title: 'title',
        })
        .expect(200)
        .end((err, res) => {
          t.error(err);
          t.ok(res.text.includes('enter'), 'response has correct error message');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});


test('Test add-challenge POST route with no category', (t) => {
  runDbBuild()
    .then((dbRes) => {
      t.ok(dbRes, 'database built');
      request(router)
        .post('/add-challenge')
        .send({
          userId: 1,
          description: 'description',
          title: 'title',
        })
        .expect(200)
        .end((err, res) => {
          t.error(err);
          t.ok(res.text.includes('choose'), 'response has correct error message');
          t.end();
        });
    })
    .catch((e) => {
      t.error(e);
      t.end();
    });
});

