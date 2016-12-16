const webpack             = require('webpack');
const ManifestPlugin      = require('webpack-manifest-plugin');
const ExtractTextPlugin   = require('extract-text-webpack-plugin');

const { DIST_PATH, APP_PATH }   = require('./paths');
const { cssLoader, sassLoader } = require('./loaders');

const PRODUCTION_CONFIG = {
  entry: {
    client: [
      APP_PATH
    ]
  },

  output: {
    path:           DIST_PATH,
    filename:       '[name]-[chunkhash].bundle.js',
    chunkFilename:  '[id]-[chunkhash].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.sass$/,
        include: APP_PATH,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [cssLoader, 'postcss-loader', sassLoader]
        })
      }
    ]
  },

  performance: {
    hints: true
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),

    new webpack.optimize.OccurrenceOrderPlugin(),

    new ExtractTextPlugin({
      filename: '[name]-[chunkhash].css',
      disable: false,
      allChunks: true
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      },
      sourceMap: true
    }),

    new ManifestPlugin({
      fileName: 'webpack-asset-manifest.json'
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    })
  ]
};

module.exports = PRODUCTION_CONFIG;
