'use strict';

const { resolve } = require('./utils');

module.exports = {
  entry: './src/index.tsx',
  output: {
    publicPath: '/',
    path: resolve('/build'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'],
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
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
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
