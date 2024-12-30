
const EventEmitter = require("events");

class Logger extends EventEmitter{

    log(massage){
        console.log(massage);
        this.emit("massageLogged",massage);//
    }
}

module.exports = Logger;