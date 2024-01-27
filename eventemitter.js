const express = require("express");
const EventEmmitter = require("events");
const app = express()
const event = new EventEmmitter()
let count = 0
event.on("countAPI", ()=>{
    count++
    console.log("Event called:- ", count)
})
app.get("/", (req,res)=>{
    res.send("API called for Event Emitter");
    event.emit("countAPI")
})
app.listen(5000)
console.log("I am listning on 5000 port")