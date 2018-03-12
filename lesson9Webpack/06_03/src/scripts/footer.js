const builder = require('./elementBuilder');
const year = new Date().getFullYear();
const footerHtml = `<p>Easycode ${year} (c)</p>`;

module.exports = builder('footer', footerHtml, 'footer');