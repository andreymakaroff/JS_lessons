export const elementBuilder = (tagName = 'div', content = '', className= '') => {
  const element =    document.createElement(tagName);
  element.className = className;
  element.innerHTML = content;
  return element;
};