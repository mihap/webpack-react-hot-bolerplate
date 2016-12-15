const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


const { HOT_ONLY_ENTRY } = require('./paths');

const DEVELOPMENT_CONFIG = {
  entry: {
    client: [
      'react-hot-loader/patch',
      HOT_ONLY_ENTRY
    ]
  },

  output: {
    publicPath: 'http://localhost:9001/'
  },

  cache: true,

  devServer: {
    hot: true,
    port: 9001,
    inline: true,
    host: '0.0.0.0',
    historyApiFallback: true,
    stats: {
      assets: true,
      timings: true,
      chunks: false,
      children: false
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new htmlWebpackPlugin({
      title: 'react webpack-2 react-hot-loader-v3 react-router-v4 boilerplate',
      template: './config/index.ejs'
    })
  ]
};

module.exports = DEVELOPMENT_CONFIG;
