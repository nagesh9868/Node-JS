const url = require("url");
// const reqUrl = ("https://www.example.com:8000/p/a/t/h?query=string&country=India&city=delhi#hash");
// const readUrl = url.parse(reqUrl, true)
// console.log(readUrl.host);
// console.log(readUrl.hash);
// console.log(readUrl.search);
// console.log(readUrl.path);
// const query = readUrl.query
// console.log(query.country);
// console.log(query.city)

const fs = require("fs");
const http = require("http");
const server = http.createServer((req,res)=>{
    const readUrl = url.parse(req.url,true)
    console.log("."+readUrl.path+".txt", readUrl.host);
    console.log(readUrl.host);
    fs.readFile("."+readUrl.path+".txt", (error, data)=>{
        if(error){
            console.log(error);
            res.writeHead(404, {'content-type':'text/html'})
            return res.end("404 Page Not found")
        }
        res.write(data)
        res.end();
    })
})

server.listen(4200,()=>{
    console.log("Server is running on 4200 port");
})