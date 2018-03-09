const http = require('http');
const fs = require('fs');
const mime = {
  html: 'text/html',
  txt: 'text/plain',
  css: 'text/css',
  gif: 'image/gif',
  jpg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  js: 'application/javascript'
};
const port = 5000;
const fileExtensions = [ 'png', 'jpg', 'jpeg', 'svg', 'js'];
const regFiles = new RegExp(`\\.(!${fileExtensions.join('|')})$`);


const server = http.createServer((req, res) => {

  var regV = /\w+$/;
  var result2 = req.url.replace('/','').match(regV);


  if (regFiles.test(req.url)) {
    fs.readFile(req.url.replace('/',''), (err, data) => {
      if (err) {
        res.end();
        throw new Error('Error while reading file: ' + err);
      }

      let type = mime[result2] || 'text/plain';
      res.setHeader('Content-Type', type);
      res.end(data);
    });
    return;
  }

  fs.readFile('index.html', 'utf-8', (err, data) => {
    if (err) {
      res.end('<strong>Error!</strong>');
      throw new Error('Error while reading index.html');
    };
    const d = new Date();
    const newData = data.replace('</body>',`<p>${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}</p></body>`);
    res.end(newData);
  });

});

server.listen(port);

// const path = require('path');
// const http = require('http');
// const fs = require('fs');
//
// const dir = path.join(__dirname, '');  // ''--корневой каталог
//
// const mime = {
//   html: 'text/html',
//   txt: 'text/plain',
//   css: 'text/css',
//   gif: 'image/gif',
//   jpg: 'image/jpeg',
//   png: 'image/png',
//   svg: 'image/svg+xml',
//   js: 'application/javascript'
// };
//
// const server = http.createServer(function (req, res) {
//   const reqpath = req.url.toString().split('?')[0];
//   if (req.method !== 'GET') {
//     res.statusCode = 501;
//     res.setHeader('Content-Type', 'text/plain');
//     return res.end('Method not implemented');
//   }
//   const file = path.join(dir, reqpath.replace(/\/$/, '/index.html'));
//   if (file.indexOf(dir + path.sep) !== 0) {
//     res.statusCode = 403;
//     res.setHeader('Content-Type', 'text/plain');
//     return res.end('Forbidden');
//   }
//   const type = mime[path.extname(file).slice(1)] || 'text/plain';
//   const s = fs.createReadStream(file);
//   s.on('open', function () {
//     res.setHeader('Content-Type', type);
//     console.log(res);
//     s.pipe(res);
//   });
//   s.on('error', function () {
//     res.setHeader('Content-Type', 'text/plain');
//     res.statusCode = 404;
//     res.end('Not found');
//   });
// });
//
// server.listen(3000, function () {
//   console.log('Listening on http://localhost:3000/');
// });