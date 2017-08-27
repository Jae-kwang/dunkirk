const express    = require('express');
const bodyParser = require('body-parser');
const logger     = require('morgan');

const WDS        = require('webpack-dev-server');
const webpack    = require('webpack');

const crawler    = require('./crawler');

const api = require('./api');

// Set up the express app
const app = express();
const router = express.Router();

const { Client } = require('pg');

const connectionString = 'postgresql://jei:1234@localhost/dunkirk';

const client = new Client(connectionString);

await client.connect();

const res = await client.query('SELECT $1::text as message', ['Hello world!']);

console.log(res.rows[0].message) // Hello world!

await client.end();

let port = 3000;
let devPort = 4000;

if (process.env.NODE_ENV == 'development') {
  console.log('Server is running on development mode');

  const config = require('../webpack.dev.config');
  let compiler = webpack(config);
  let devServer = new WDS(compiler, config.devServer);
  devServer.listen(devPort, () => {
    console.log('webpack-dev-server is listening on port', devPort);
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