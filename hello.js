// console.log("hello world")


// this is the usual behaviour offered by js --this is the event loop operation 

// console.log("Start reading a file...");

// setTimeout(()=>{
//     console.log("set time out function")
// })
// console.log("End of the program.");


const http = require("http")
const server = http.createServer((req,res)=>{
    console.log('request event');
    res.write('hello world');
    res.end();
})
server.listen(4000,()=>{
    console.log('server listeing on port :4000.......')
})


// setInterval(()=>{
//     console.log("hello")
// },2000)
// console.log("i will first")





// const fs = require('fs');

// console.log("Start reading a file...");

// fs.readFile('example.txt', 'utf-8',
//     (error, data) => {
//         if (error) {
//             throw error;
//         }
//         console.log(data);
//     }
// );

// console.log("End of the program.");

// const data1 = fs.readFile('example.txt','utf8',(result)=>{
//     console.log(result)
// })
// console.log(data1)