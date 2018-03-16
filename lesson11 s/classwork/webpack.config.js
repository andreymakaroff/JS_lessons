const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const args = require('yargs').argv;

let stylesLoader = [
  {loader: "style-loader"},
  {loader: "css-loader"},
  {loader: "sass-loader"}
];

const plugins = [
  new HtmlWebpackPlugin({
    template: 'index.html',
    title: 'Hi Andrew'
  }),
  new webpack.HotModuleReplacementPlugin(),
];

if(args.env && args.env.styles){
  stylesLoader = ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {loader: "css-loader"},
        {loader: "sass-loader"}
      ]
    });
  plugins.push(new ExtractTextPlugin({
    filename: 'styles.css',
    allChunks: true
  }))
}

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
            presets: ['env'],
            plugins: ['syntax-dynamic-import']
          }
        }
      },

      {
        test: /\.s?css$/,
        use: stylesLoader
      },

    ]
  },

  plugins,

  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      port: 9000,
      hot: true
  }

};
