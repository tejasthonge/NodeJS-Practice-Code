const express = require('express')
const app= express();
app.use(express.static('public'));
//by using express.static(<foldername>)

//we can serve all the files  in the folder and can be access by
//http://localhost:3000/demo.txt


app.get('/',(req,res)=>{
    res.send("Server Running");
});

const port = process.env.PORT ||3000;
app.listen(port,
    ()=>console.log("server running at "+port)
);


//http://localhost:3000/demo.txt
/*
op:
Jay shree ram
*/

//the output as above the reson demo.txt contain this text

