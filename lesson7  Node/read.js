const fs = require('fs');

const read = (name, callBack = console.log) =>           //  _=_    можно так же callBack = console.log
fs.readFile(name, 'utf-8', (error, data) =>{
  if(error){
    console.log('error', error);
    return;
  }

  callBack(data);
});

module.exports= read;

