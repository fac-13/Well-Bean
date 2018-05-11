const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');

// require controllers
const controllers = require('./controllers');
const helpers = require('./views/helpers/index');

const app = express();

// set up views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    helpers,
    defaultLayout: 'main',
  }),
);

// form data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set up server
app.set('port', process.env.PORT || 3000);
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(controllers);

module.exports = app;
