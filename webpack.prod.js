const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    dunkirk_js : [
      './src/normalize.css',
      './src/index.js',
    ]
  },
  plugins: [
    new UglifyJSPlugin()
  ]
});