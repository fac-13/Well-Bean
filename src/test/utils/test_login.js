// Callback function to sign in & grab the cookie session
function createLoginCookie(server, loginDetails, callback) {
  request(router)
    .post(server)
    .send(loginDetails)
    .expect(302)
    .end((error, response) => {
      if (error) {
        throw (error);
      }
      const loginCookie = response.headers['set-cookie'];
      callback(loginCookie);
    });
}
