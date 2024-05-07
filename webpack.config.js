const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js'
  },
  devServer: {
    static: './public',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};