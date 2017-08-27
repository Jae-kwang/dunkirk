const express    = require('express');
const bodyParser = require('body-parser');
const logger     = require('morgan');

const crawler    = require('./crawler');

// const pg = require('pg');

const api = require('./api');

// Set up the express app
const app = express();

const router = express.Router();

/*
connectDB();

async function connectDB() {

  const connectionString = process.env.DATABASE_URL || 'postgresql://jei:1234@localhost/dunkirk';

  const client = new pg.Client(connectionString);

  await client.connect();

  const res = await client.query('SELECT $1::text as message', ['Hello world!']);

  console.log(res.rows[0].message); // Hello world!

  await client.end();

};
*/

let port = 3000;

let DEV_PORT = 4000;

if (process.env.NODE_ENV == 'development') {

  const Webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');
  const webpackConfig = require('../webpack.dev.config')

  const compiler = Webpack(webpackConfig);
  const devServer = new WebpackDevServer(compiler, webpackConfig.devServer);

  // dev-server open
  devServer.listen(DEV_PORT, () => {
    console.log('webpack-dev-server is listening on port', DEV_PORT);
  });
}

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', express.static(__dirname + '/../public'));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.post('/ticketing', (req, res) => {

  var data = req.body;

  if (Object.keys(data).length === 0) return;

  // 1. job 생성
  const job = crawler.create(data);

  // 2. job 실행
  job.start();

  return res.send(data);

});

app.listen(port, () => {
  console.log('Express listening on port', port);
});