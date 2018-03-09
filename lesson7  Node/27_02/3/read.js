const fs = require('fs');

const read = (name) => new Promise((resolve, reject) => {
  fs.readFile(name, (err, data) => {
    if (err) return resolve(err);
    return resolve(data.toString('utf8'));
  });
});

module.exports = read;
