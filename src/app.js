const express = require('express');
const controllers = require('./controllers');

const app = express();

app.use(controllers);

app.set('port', process.env.PORT || 3000);

module.exports = app;
