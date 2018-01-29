'use strict';

const autoprefixer = require('autoprefixer');
const {
  ASSETS_PATH
} = require('./paths');

const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    importLoaders: 2,
    camelCase: true,
    minimize: true,
    localIdentName: '[folder]__[local]___[hash:base64:5]'
  }
};

const sassLoader = {
  loader: 'sass-loader',
  options: {
    outputStyle: 'expanded',
    includePaths: [
      ASSETS_PATH
    ]
  }
};

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: () => [
      autoprefixer()
    ]
  }
};

const imagesLoader = {
  loader: 'url-loader',
  options: {
    limit: 100000,
    name: '[name]-[hash].[ext]'
  }
};

module.exports = {
  cssLoader,
  sassLoader,
  postcssLoader,
  imagesLoader
};
