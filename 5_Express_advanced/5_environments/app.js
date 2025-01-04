

const express = require('express');

const app = express();
console.log(`Node Current Environment: ${process.env.NODE_ENV}`);
console.log(`App Environment: ${app.get('env')}`);

/*
op:
Node Current Environment: undefined
App Environment: development     
*/ 

// the above output is due to
//we are not NODE_ENV 
//so app.get will return by defoult "decelopment"

//we set NODE_ENV as 
//export NODE_ENV=<your envornmet>

if(app.get('env'==="development")){
    app.use(morgen('tiny'))
}