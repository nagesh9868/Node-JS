//blocking code as below
// console.log("file going to be created");
// fs.writeFileSync("file1.txt", "Something written on the file");
// console.log("file has been created");

//non-blocking code as below 
// let a = 10;
// let b = 20;
// setTimeout(() => {
    //     b = 10
    // }, 2000);
    // console.log("this should be 10 but it results 30 as it is a non-blocking code -", a+b);
    
const fs = require("fs");
fs.readFile('file1.txt', (error, data)=>{
    if(error){
        console.log(error);
    }else{
        console.log(data.toString());
    }
})