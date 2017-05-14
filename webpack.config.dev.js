// import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
// export default {
  // debug: true,
  devtool: 'inline-source-map',
  // noInfo: false,
  entry: [
    // path.resolve(__dirname, 'scripts/livereload'),
    path.resolve(__dirname, 'src/main')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
    // Create HTML file that includes reference to bundled JS
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
  ],
  module: {
    rules: [
      {test: /\.css$/, loader: 'style-loader'},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader')}
    ]
  }
}
