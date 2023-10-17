const fs =require('fs')

console.log('My FIRST STATEMENT');

setTimeout(()=>{
    console.log("settime out statemnet")
},0);

fs.readFile('file.txt',()=>{
    console.log("file text is read")
});

setInterval(()=>{
    console.log('setInterval executed')
},1000);

setImmediate(()=>{
    console.log('set Immediate executed')
});
console.log('My LAST STATEMENT');



// fs.writeFile('file.txt',()=>{
//     console.log('set immediate executed')
// })

// Socket.on('close',()=>{
//     console.log('socket connection closed')
// })