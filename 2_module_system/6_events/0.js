

// #Event 
/*
    It is core consept of node 
    - evet is  signle that endicate somthing is happen in or appliction
    -   
*/

// EventEmitter is main class to hande the evets

const EventEmitter = require('events'); //here we require the Events modlue and it will get EventEmitter class
const emitter =new  EventEmitter();   // here we createing the object of EventEmitter class havig name emitter 


//Registore an Lis
emitter.on("massageLogged",function(){
    console.log("Listter Callad");
});

//Raise an Event
emitter.emit("massageLogged");


