import express from 'express';
import path from 'path';
import morgan from 'morgan'; // HTTP REQUEST LOGGER
import bodyParser from 'body-parser'; // PARSE HTML BODY
import mongoose from 'mongoose';
import session from 'express-session';
import api from './routes';

const app = express();
const config = {
  port: 3000
};

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, './../public')));
app.use('/api', api);
/* mongodb connection */
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => { console.log('Connected to mongodb server'); });
// mongoose.connect('mongodb://username:password@host:port/database=');
mongoose.connect('mongodb://localhost:27017/memoapp');

/* use session */
app.use(session({
    secret: 'minung',
    resave: false,
    saveUninitialized: true
}));

/* handle error */
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/hello', function (req, res) {
  return res.send('Hello CodeLab');
});

app.listen(config.port, function () {
  console.log('Express is listening on port', config.port);
});