const fs = require('file-system');
const date = new Date().getDate();

fs.writeFile('path/test.txt', date, function(err) {});