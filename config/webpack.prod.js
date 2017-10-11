'use strict';

const path                = require('path');
const webpack             = require('webpack');
const UglifyJSPlugin      = require('uglifyjs-webpack-plugin');
const ManifestPlugin      = require('webpack-manifest-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const ExtractTextPlugin   = require('extract-text-webpack-plugin');
const CompressionPlugin   = require('compression-webpack-plugin');

// https://github.com/webpack/webpack/issues/1315
const WebpackMd5Hash = require('webpack-md5-hash');

const {
  APP_PATH,
  DIST_PATH,
}   = require('./paths');

const {
  cssLoader,
  sassLoader,
  postcssLoader
} = require('./loaders');

const PRODUCTION_CONFIG = {
  entry: {
    client: [
      path.resolve(APP_PATH, 'config', 'polyfill'),
      APP_PATH
    ]
  },

  output: {
    path:     DIST_PATH,
    filename: '[name]-[chunkhash].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: APP_PATH,
        loader: 'babel-loader'
      },
      {
        test: /\.sass$/,
        include: APP_PATH,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            cssLoader,
            postcssLoader,
            sassLoader
          ]
        })
      }
    ]
  },

  plugins: [
    new webpack.HashedModuleIdsPlugin(),

    new ManifestPlugin({
      fileName: 'webpack-asset-manifest.json'
    }),

    new ChunkManifestPlugin({
      filename: 'webpack-chunk-manifest.json',
      manifestVariable: 'webpackManifest',
      inlineManifest: true
    }),

    new WebpackMd5Hash(),

    new UglifyJSPlugin({
      uglifyOptions: {
        ecma: 7
      },
      sourceMap: true
    }),

    new ExtractTextPlugin({
      filename: '[name]-[contenthash].css',
      disable: false,
      allChunks: true
    }),

    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
      exclude: /vendor.*\.js$/
    }),
  ]
};

module.exports = PRODUCTION_CONFIG;
