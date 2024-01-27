const {Transform} = require("stream");

const upperCaseStream = new Transform({
    transform(chunk, encoding, callback){
        console.log("Chunk1: - ",chunk.toString());
        callback(null, chunk.toString().toUpperCase())
    }
})

module.exports = upperCaseStream;