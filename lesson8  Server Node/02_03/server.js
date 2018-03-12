const http = require('http');
const fs = require('fs');
const mime = {
  txt: 'text/plain',
  css: 'text/css',
  gif: 'image/gif',
  jpg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  js: 'application/javascript'
};
const port = 5000;
const regFiles = new RegExp(`\\.(${Object.keys(mime).join('|')})$`);


const server = http.createServer((req, res) => {

  const regV = /\w+$/;  // file extension
  const result2 = req.url.replace('/','').match(regV);

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
    res.end(data.replace('</body>',`<p>${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}</p></body>`));
  });

});

server.listen(port, function () {
  console.log(`Listening on http://localhost:${port}/`);
});
