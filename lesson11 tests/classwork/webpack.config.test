const path = require('path');

let stylesLoader = [
  {loader: 'style-loader'},
  {loader: "css-loader"},
  {loader: "sass-loader"}
];

module.exports = {
  context: path.resolve('src'),

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
      }

    ]
  }
};