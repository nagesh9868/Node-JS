const express = require("express");
const app = express()
const url = require("url")
app.get("/",(req,res)=>{
    const reqUrl = url.parse(req.url,true)
    console.log(reqUrl.host);
    res.send("This is a basic application on node js")
    res.end()
})
app.listen(3000, ()=>{
    console.log();
    console.log("Server is running on the port no 3000");
})