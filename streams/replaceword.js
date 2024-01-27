//the transform method
const {Transform} = require("stream")
const replaceWordStream = new Transform({
    transform(chunk,encoding,callback){
        console.log("Chunk2: - ",chunk.toString());
        const finalString = chunk.toString().replaceAll(/ipsum/gi,"Cool" )
        console.log("Chunk3", finalString);
        callback(null, finalString)
    } 
})

module.exports = replaceWordStream;