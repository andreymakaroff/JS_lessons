const http = require('http');
const fs = require('fs');
const port = 3000;


const server = http.createServer((request, response) => {
  response.setHeader('Content-Type','text/html');

  if(request.url === '')

  fs.readFile('index.html',(err, data) => {
    if(err){
      response.statusCode = 404;
      response.end(err.toString());
      return ;
    }
    response.end(data);
  })

});

server.listen(port);



// STYLES WEATHER
// const http = require('http');
//
// const style = '<style>body{background: dimgrey;color: yellow}</style>';
//
// const server = http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'text/html');
//   http.get('http://wttr.in/~kharkov', (response) => {
//     if (response.statusCode !== 200) { res.end('<strong style="color:red">Error!</strong>'); }
//     else {   response.setEncoding('utf-8');
//       let result = '';
//       response.on('data', data => result += data);
//       response.on('end', () => res.end(result.replace('<body',`${style}<body`)));
//     }
//   });
// });
//
// server.listen(3000);