const path = require('path');

module.exports = function (config) {
  config.set({

    basePath: '',

    frameworks: ['mocha'],

    files: [
      'tests/**/*.js',
      'tests/*.js'
    ],

    exclude: [],

    preprocessors: {
      'tests/**/*.js': ['webpack'],
      'tests/*.js': ['webpack']
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ["Chrome-headless"],

    customLaunchers: {
      "Chrome-headless": {
        base: 'Chrome',
        flags: ['--headless', '--remote-debugging-port=9222', '--no-sandbox']
      }
    },

    singleRun: false,

    concurrency: Infinity,

    plugins: [
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-webpack',
    ],

    webpack: {
      context: path.resolve('tests'),

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
          }]
      }
    }
  })
};