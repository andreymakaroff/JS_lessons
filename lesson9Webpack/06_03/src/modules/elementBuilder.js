const jquery = require('jquery');


module.exports = (tagName = 'div', content = '', className = '') => {
  const builder = jquery(`<${tagName}>`).addClass(className).html(content);

  return builder;
};