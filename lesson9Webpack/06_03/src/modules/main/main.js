const builder = require('../elementBuilder');
require('./main.css');

const time = new Date().toLocaleString();
const mainHtml = `<h1>Webpack</h1><div>Not interesting text...</div><p id="time">${time}</p>`;

module.exports = builder('main', mainHtml, 'main');