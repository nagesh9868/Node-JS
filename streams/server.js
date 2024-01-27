const http = require("http");
//Async promise method 
// const fs = require("fs").promises
// function readFile(){
//     return fs.readFile("./sample.txt")
// }
// const server = http.createServer((req,res)=>{
//     if(req.url !== "/"){
//         readFile().then(fileContent=>{
//             res.write(fileContent)
//         })
//     }else{
//         res.end("something went wrong")
//     }
// })

//Sync Method bad way to transfer the data 
const fs = require("fs");
const upperCaseStream = require("./uppercaseword");
const replaceWordStream = require("./replaceword");
const server = http.createServer((req,res)=>{
    // if(req.url !== "/"){
    //     console.log("Response Sent to Requester");
    //     return res.end("if Condition")
    // }
    // const fileData = fs.readFileSync("./story.mp4");
    // res.writeHead(200,{'Content-Type':'video/mp4'})
    // return res.end(fileData)

//good way to transfer the file (Streams)
    // const readablestream = fs.createReadStream("./story.mp4");
    // res.writeHead(200, {'Content-Type':'video/mp4'})
    // readablestream.pipe(res);
//bad way to copy file
// const file = fs.readFileSync("./sample.txt");
// fs.writeFileSync("newTextFile.txt", file)
// res.end("file has been copied")
//Good way to copy the file 
// const readStream = fs.createReadStream("./sample.txt");
// const writeStream = fs.createWriteStream("streamFile.txt");
// readStream.on('data', (chunk)=>{
//     console.log('Chunk - ', chunk);
//     writeStream.write(chunk)
// })
//transform thru simple way 
// const fs = require("fs");
const readStream = fs.createReadStream("sample1.txt");
const writeStream = fs.createWriteStream("transform1.txt");
// readStream.on("data", (chunk)=>{
    // console.log("Chunk :- ",chunk.toString());
// processing to uppercase 
// const upperCaseString = chunk.toString().toUpperCase();
// const badWordChange = upperCaseString.replaceAll(/ipsum/gi,"Cool" )
// writable stream write 
// writeStream.write(badWordChange)
// })
readStream
// .pipe(upperCaseStream)
.pipe(replaceWordStream)
.pipe(writeStream);
return res.end("file has been copied")
})

const PORT = process.env.PORT || 4200
server.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`);
})  