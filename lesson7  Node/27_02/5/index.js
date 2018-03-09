const http = require('http');
const fs = require('file-system');
const filename = 'weather';
const url = "http://wttr.in/~kharkov";

const createWeatherHtml = (url, filename) =>{
  http.get(url, (res) => {
    if (res.statusCode !== 200) throw new Error(res.statusCode);
    let result = '';
    res.setEncoding('utf-8');
    res.on('data', data => result += data);
    res.on('end', () => {
      fs.writeFile(`./${filename}.html`, result);
    });
  });
};

createWeatherHtml(url, filename);