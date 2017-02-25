'use strict';

let path = require('path');

module.exports = {
  entry: ['./utils.js', './app.js'],
  output: {
    filename: './bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.es6']
  }
};