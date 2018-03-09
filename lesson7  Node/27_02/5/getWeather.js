const http = require('http');
const fs = require('file-system');

const createWeatherHtml = (url, filename) =>{
  http.get(url, (res) => {
    if (res.statusCode !== 200) throw new Error(res.statusCode);
    let result = '';
    res.setEncoding('utf-8');
    res.on('data', data => result += data);
    res.on('end', () => {
      fs.writeFile(`./${filename}.html`, result);
      fs.readFileSync(`./${filename}.html`);
    });
  });
};

module.exports = createWeatherHtml;