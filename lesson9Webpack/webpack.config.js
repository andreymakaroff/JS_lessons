const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      title: 'Allah Akbar'
    })
  ],

  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },
};
