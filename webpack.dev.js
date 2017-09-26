const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    dunkirk : [
      'react-hot-loader/patch',
      // activate HMR for React

      'webpack-dev-server/client?http://localhost:4000',
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint

      'webpack/hot/only-dev-server',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates

      'babel-polyfill',
      // error : regeneratorRuntime is not defined
      // resolve : https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined

      './src/reset.css',

      './src/index.js',
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true,
    // enable HMR on the server
    filename: 'bundle.js',
    historyApiFallback: true,

    contentBase: path.join(__dirname, "dist"),
    stats: {
      colors: true
    },
    proxy: {
      "**": "http://localhost:3000"
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
  ]
});