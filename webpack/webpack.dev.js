'use strict';

const HtmlWebPackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const webpackBase = require('./webpack.config');

module.exports = merge(webpackBase, {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    port: 3000,
    hot: true,
    proxy: {
      '/api': 'https://all.rbsdev.com/'
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.html$/,
      //   loader: 'html-loader'
      // },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      filename: './index.html'
    })
  ]
});
