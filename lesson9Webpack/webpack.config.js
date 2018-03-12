const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: './app.js',
  context: path.resolve('src'),
  output: {
    filename: 'bundle-[hash].js',
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
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [  // снизу вверх
            {loader: "css-loader"},   // .
            {loader: "sass-loader"}   // .scss to css
          ]
        })
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      title: 'Hi Andrew'
    }),
    new ExtractTextPlugin("styles.css"),
  ],

  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },
};
