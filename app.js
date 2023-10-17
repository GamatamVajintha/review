
const http = require('http')
const server = http.createServer((req,res)=>{
    const url = req.url
    if(url === '/')
  {
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>home page</h1>')
    res.end("home page of my website")
  }
  else if(url === '/about')
  {
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>about page</h1>')
    res.end("home page of my website")
  } 
  else{
    res.writeHead(404,{'content-type':'text/html'})
    res.write('<h1>Page not found</h1>')
    res.end("home page of my website")
    }
    // if we fail to give this res.end it should load the request but it unable to send back the response
})
server.listen(5000)














































































// const  myModule = require('./myModule')
// myModule.sayHello('vinni');

// const path = require('path')
// const fullPath=path.join('content','subcontent','file.txt');
// const dirName = path.dirname('/path/to/myFile.txt');
// console.log(dirName)
// console.log(fullPath)


// console.log("hi")
// var http = require('http');
// var fs = require('fs')

// http.createServer(function (req,res){

//     const fileStream = fs.createReadStream('./streams.js','utf8')
//     fileStream.on('open',()=>{
//         fileStream.pipe(res)
//     })
//     fileStream.on('err',()=>{
//         res.end(err)
//     })
//     // const text = fs.readFileSync('./streams.js','utf8')
//     // res.end(text)
// })
// .listen(5000)



// console.log("hi")

// const sayHi = (name) => {
//     console.log('my name is :' + name)
// };
// sayHi("pujitha")