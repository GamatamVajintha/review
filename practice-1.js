

// const path = require('path');
// const fullPath = path.join(__dirname);
// console.log(fullPath);

const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
