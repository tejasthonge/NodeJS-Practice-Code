

const url = "http://mylogger.io/log"

function log(message){

    console.log(message)
}


//this all are private visibility only on this file only

module.exports.log = log
module.exports.endPoinUrl = url

/*
module.exports.log = log;  // Correct way to export the log function.
exports.log = log;         // This does nothing because it breaks the reference.
*/