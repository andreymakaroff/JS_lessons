const jquery = require('jquery');
const header = require('./scripts/header');
const footer = require('./scripts/footer');
const main = require('./scripts/main');

jquery('body').append(header, main, footer);