var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  // devtool: 'source-map', // ??
  output: {
    path: path.resolve(__dirname, 'lib'),
    // publicPath: '/assets/',
    filename: 'index.babel.js',
    // This part is dedicated to create a proper module.
    // E. g., when you import it in a browser, this name will stand for
    // a name of imported module.
    library: 'ams',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devServer: {
    contentBase: __dirname
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }]
      },
    ]
  }
};
