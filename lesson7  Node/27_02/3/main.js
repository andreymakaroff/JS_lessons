const read = require('./read');

//3
read('name.txt')
  .then(text => console.log(text))
  .catch(err => console.log(err));
