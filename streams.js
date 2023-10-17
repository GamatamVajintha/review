const {Readable}=require('stream');

const inStream = new Readable({
    read() {}
})

inStream.push('hello:::');
inStream.push('Good afternoon *******');
inStream.push('kljfbjbvhjrgfvbfnmbhbjvhf');

inStream.pipe(process.stdout);

inStream.on('data', (chunk) => {
    console.log("Received chunk:", chunk.toString());
});
//custom readable the data in stream............