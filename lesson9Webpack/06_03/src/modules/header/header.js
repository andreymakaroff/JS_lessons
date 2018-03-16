const builder = require('../elementBuilder');
require('./header.css');

const headerHtml = '<a href="/">Logo</a>';

module.exports = builder('header', headerHtml, 'header');