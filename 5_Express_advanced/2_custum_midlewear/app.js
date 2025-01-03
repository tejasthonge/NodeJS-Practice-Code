const express= require('express');
const log = require('./authenticate');
const app  = express();

app.use(express.json())

app.use(function(req,res,next){

    console.log("Logging..");
    next(); //it is another next midlewere functon refarce 

    //if we are not calling the next widlewere function we get respose as only loading

});

//anather mildeware function

app.use(log);
//form this above we know that what actuly do the express.json()

app.get('/',(req,res)=>{
    console.log("in  route handlere midleweare fucntion");
    res.send("Jay Shree ram");
});

const port = process.env.PORT || 3000;

app.listen(port,()=>console.log("server listening at "+port));
/*
[nodemon] 3.1.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node app.js`
server listening at 3000
Logging..
authenticate..
in  route handlere midleweare fucntion

*/