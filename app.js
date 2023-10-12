
const  myModule = require('./myModule')
myModule.sayHello('vinni');

const path = require('path')
const fullPath=path.join('content','subcontent','file.txt');
const dirName = path.dirname('/path/to/myFile.txt');
console.log(dirName)
console.log(fullPath)




// console.log("hi")

// const sayHi = (name) => {
//     console.log('my name is :' + name)
// };
// sayHi("pujitha")