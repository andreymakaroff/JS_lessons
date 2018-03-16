// Karma configuration
// Generated on Tue Mar 13 2018 20:58:04 GMT+0200 (Финляндия (зима))

const path = require('path');
const webpackConfig = require('./webpack.config.test');

module.exports = function (config) {
  config.set({

    basePath: '',

    frameworks: ['mocha'],  //for pretty result

    files: [
      'src/**/*.js',
      'src/*.js'
    ],

    exclude: [],

    preprocessors: {
      'src/**/*.js': ['webpack'],
      'src/*.js': ['webpack']
    },

    reporters: ['mocha'],

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
      'karma-mocha-reporter',  //for pretty result
    ],

    webpack: webpackConfig
  })
};