/* eslint-disable */
const request = require('supertest');
const router = require('../../app.js');

// Callback function to sign in & grab the cookie session
exports.testLogin = (server, loginDetails, callback) => {
  request(router)
    .post(server)
    .send(loginDetails)
    .expect(302)
    .end((error, response) => {
      if (error) {
        throw error;
      }
      const loginCookie = response.headers['set-cookie'];
      callback(loginCookie);
    });
};
