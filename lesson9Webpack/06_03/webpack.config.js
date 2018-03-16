const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app.js',
  context: path.resolve('src'),
  output: {
    filename: 'bundle-[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:"css-loader",
        })
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new ExtractTextPlugin("styles-" + Date.now() + ".css"),
  ],

  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },
};