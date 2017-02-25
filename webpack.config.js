'use strict';

let path = require('path');

module.exports = {
  context: path.resolve('js'),
  entry: ['./utils', './app'],
  output: {
    path: path.resolve('build/js'),
    publicPath: '/public/assets/js',
    filename: './bundle.js'
  },

  devServer: {
    contentBase: 'public'
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