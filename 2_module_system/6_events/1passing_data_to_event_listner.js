


const EventEmitter = require("events");

const emitter = new EventEmitter();
//Ragitering the listener havig the arg parametor
emitter.on("callulateSum",function(eventArg){

    var sum = eventArg.a+ eventArg.b;
    console.log(`Sum of ${eventArg.a} and ${eventArg.b} : ${sum}`);
});


emitter.emit("callulateSum",{a:13,b:43}); //here we passint the argumet at time of raiseing the event with the js object 
