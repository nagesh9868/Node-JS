Readable and writable stream
const {Readable, Writable} = require('stream');
const readableStream = new Readable({
    highWaterMark: 2,//this is a kind of threshold in bytes
    read(){}
})

const writableStream = new Writable({
    write(chunk){
        console.log("writing: - ", chunk.toString());
    }
})

readableStream.on("data", (chunk)=>{
    console.log("readable chunk - ", chunk.toString());
    writableStream.write(chunk)
})
console.log(readableStream.push("Hello, this is Nageshwar Sharma"))
