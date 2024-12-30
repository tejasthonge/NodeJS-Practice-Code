const Logger = require('./logger');

const logger = new Logger();

logger.on("massageLogged",function(massage){

    console.log(`Listener Called ${massage}`);
});

logger.log("Ram Ram");


/*

if the logger module is expots as 
    module.exports.Logger = Logger; 
then
    at time of require we have 
    Logger = require('./logger').Logger
*/