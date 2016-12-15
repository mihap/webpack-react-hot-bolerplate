
const { ASSETS_PATH } = require('./paths');

const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    importLoaders: 2,
    camelCase: true,
    localIdentName: '[folder]__[local]___[hash:base64:5]'
  }
};

const sassLoader = {
  loader: 'sass-loader',
  options: {
    outputStyle: 'expanded',
    includePaths: ASSETS_PATH
  }
};

module.exports = {
  cssLoader,
  sassLoader
};
