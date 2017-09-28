const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    dunkirk : [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:4000',
      'webpack/hot/only-dev-server',
      'babel-polyfill',

      './src/normalize.css',
      './src/index.js',
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true,
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
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
});