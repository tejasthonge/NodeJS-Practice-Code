

const express = require('express');
const morgen = require('morgan');
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


if (app.get('env') === "development") {
    console.log("development");
    app.use(morgen('tiny'))
}
else if (app.get('env') === "production") {
    console.log("production");

}



app.listen(3000, () => console.log("server is lissinging at 3000"))

/*
 >_ export NODE_ENV=production 
~/coding/github/NodeJS-Practice-Code/5_Express_advanced/5_environments >_ nodemon app.js            
[nodemon] 3.1.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node app.js`
Node Current Environment: production
App Environment: production
production
server is lissinging at 3000
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Node Current Environment: production
App Environment: production
production
server is lissinging at 3000

*/