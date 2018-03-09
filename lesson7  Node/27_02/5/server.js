const http = require('http');
const fs = require('file-system');
const filename = 'weather';
const url = "http://wttr.in/~kharkov";

// http.get('http://wttr.in/~kharkov', (res) => {
//   if (res.statusCode !== 200) throw new Error(res.statusCode);
//   res.setEncoding('utf-8');
//
//   let result = '';
//   const  write = (result) => {
//     fs.writeFile('./index.html', result, function(err) {});
//   };
//
//   res.on('data', data => result += data);
//   res.on('end', () => write(result));
//
// });

const htmlWeather =  require('./getWeather');


const createServer = () =>{
  // const file = await htmlWeather(url, filename);

  const index =  htmlWeather(url, filename)
    .then(()=>{
      http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        res.end(index);
      }).listen(8080, '127.0.0.1');
    });

// await console.log(index);
//   await

  console.log('Server running at http://127.0.0.1:8080/');
};


createServer();