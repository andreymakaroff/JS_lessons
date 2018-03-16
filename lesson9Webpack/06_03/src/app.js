const jquery = require('jquery');
const header = require('./modules/header/header');
const footer = require('./modules/footer/footer');
const main = require('./modules/main/main');

jquery('body').append(header, main, footer);