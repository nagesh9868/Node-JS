const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200, {"Content-Type": 'text/plain'});
    res.end('hello, World')
});
server.listen(3000)
console.log('The server is running on the port no 3000');

//callback 
//normal function 
function sum(a, b)
{
 console.log(a + b);
}
sum(10,20)
//callback functions
function complexSum(sum)
{
  return sum(200,300);
}
complexSum(sum)//500

const fs = require('fs');
fs.readFile('hello.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});//it will show the data what is mentioned into the hello.txt file