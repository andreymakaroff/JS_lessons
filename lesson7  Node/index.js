// const prettyDate = require('./date');
//
// const fs = require('fs');
// fs.readFile('text.txt', (error, data) =>{
//   if(error){
//     console.log('error');
//     return;
//   }
//
//   console.log(prettyDate());
// });


const read = require('./read');

read('text.txt', text => console.log(text));
