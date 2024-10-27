const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'libs', to: 'libs' },
        { from: 'img', to: 'img' },
        { from: 'css', to: 'css' },
        { from: 'favicon.ico', to: 'favicon.ico' },
      ],
    }),
  ],
});
