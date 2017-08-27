const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js',
    'webpack-dev-server/client?http://localhost:4000',
    'webpack/hot/only-dev-server'
  ],
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  devServer: {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    historyApiFallback: true,
    contentBase: './public',
    proxy: {
      "**": "http://localhost:3000"
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader','style-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['react-hot-loader', 'babel-loader']
      }
    ],
  }
};