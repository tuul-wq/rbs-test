'use strict';

const HtmlWebPackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const webpackBase = require('./webpack.config');

module.exports = merge(webpackBase, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    https: true,
    contentBase: './build',
    port: 3000,
    hot: true,
    openPage: 'sb-mp3back',
    historyApiFallback: true,
    proxy: [{
      context: ['/sb-mp3back/**'],
      target: 'https://all.rbsdev.com',
      secure: false
    }]
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
