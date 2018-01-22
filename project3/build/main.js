'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// HTTP REQUEST LOGGER
var app = (0, _express2.default)(); // PARSE HTML BODY

var config = {
  port: 3000
};

app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use('/', _express2.default.static(_path2.default.join(__dirname, './../public')));
/* mongodb connection */
var db = _mongoose2.default.connection;
db.on('error', console.error);
// db.once('open', () => { console.log('Connected to mongodb server'); });
// mongoose.connect('mongodb://username:password@host:port/database=');
_mongoose2.default.connect('mongodb://localhost:27017/memoapp', function (err, client) {
  console.log('Connected to mongodb server');
});

/* use session */
app.use((0, _expressSession2.default)({
  secret: 'minung',
  resave: false,
  saveUninitialized: true
}));

/* handle error */
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/hello', function (req, res) {
  return res.send('Hello CodeLab');
});

app.use('/api', _routes2.default);
/* support client-side routing */
app.get('*', function (req, res) {
  res.sendFile(_path2.default.resolve(__dirname, './../public/index.html'));
});

app.listen(config.port, function () {
  console.log('Express is listening on port', config.port);
});