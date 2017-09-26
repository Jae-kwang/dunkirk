const express    = require('express');
const logger     = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const api = require('./api');

mongoose.Promise = global.Promise;

// var URI = `mongodb://silver889:silver889@ds133084.mlab.com:33084/dunkirk`;

var URI = 'mongodb://localhost/dunkirk';

mongoose.connect(URI).then(
  (response) => {
    console.log('Successfully connected to mongodb');
  }
).catch(e => {
  console.error(e);
});




let port = 3000;

let DEV_PORT = 4000;

if (process.env.NODE_ENV == 'development') {

  const Webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');
  const webpackConfig = require('../webpack.dev');

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

app.use('/', express.static(__dirname + '/../dist'));

app.use('/api', api);

//Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

app.listen(port, () => {
  console.log('Express listening on port', port);
});