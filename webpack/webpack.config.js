'use strict';

const { resolve } = require('./utils');

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: '/',
    path: resolve('/build'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      Fonts: resolve('/src/assets/fonts/'),
      Images: resolve('/src/assets/images/'),
      Styles: resolve('/src/assets/styles/'),
      Components: resolve('/src/components/'),
      Context: resolve('/src/context/'),
      Services: resolve('/src/services/'),
      Store: resolve('/src/store/'),
      Views: resolve('/src/views/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
          // 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader'
        ]
      },
      {
        test: /\.(svg|ico)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
        },
      },
      {
        test: /\.woff2$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    ]
  }
};
