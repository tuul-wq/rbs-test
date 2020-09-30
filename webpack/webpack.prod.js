'use strict';

const HtmlWebPackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const webpackBase = require('./webpack.config');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(webpackBase, {
  mode: 'production',
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: 'main.css'
    // }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      filename: './index.html'
    })
  ]
});
