const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  resolve: {
    modules: [
      path.resolve(__dirname, "src"),
      './node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }]
      }
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "dinkirk.css"
    })
  ]
};
