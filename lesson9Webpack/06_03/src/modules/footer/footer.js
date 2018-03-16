const builder = require('../elementBuilder');
require('./footer.css');

const year = new Date().getFullYear();
const footerHtml = `<p>Easycode ${year} (c)</p>`;

module.exports = builder('footer', footerHtml, 'footer');