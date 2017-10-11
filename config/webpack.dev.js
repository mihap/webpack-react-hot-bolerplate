'use strict';

const path = require('path');
const webpack = require('webpack');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');


const {
  APP_PATH,
  HMR_ENTRY,
  NODE_MODULES_PATH,
  DIST_PATH
} = require('./paths');

const DEVELOPMENT_CONFIG = {
  entry: {
    client: [
      path.resolve(APP_PATH, 'config', 'polyfill'),
      HMR_ENTRY
    ]
  },

  output: {
    path: DIST_PATH,
    filename: '[name].js',
    publicPath: 'http://localhost:9001/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: APP_PATH,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    ]
  },

  devServer: {
    hot: true,
    port: 9001,
    inline: true,
    host: 'localhost',
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    compress: true,
    watchOptions: {
      ignored: /node_modules/
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new WatchMissingNodeModulesPlugin(NODE_MODULES_PATH)
  ]
};

module.exports = DEVELOPMENT_CONFIG;
