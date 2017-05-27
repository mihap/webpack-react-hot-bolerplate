const autoprefixer = require('autoprefixer');
const { ASSETS_PATH } = require('./paths');

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
    includePaths: [ASSETS_PATH]
  }
};

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: () => [
      require('postcss-flexbugs-fixes'),
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9'
        ],
        flexbox: 'no-2009'
      })
    ]
  }
};

module.exports = {
  cssLoader,
  sassLoader,
  postcssLoader
};
