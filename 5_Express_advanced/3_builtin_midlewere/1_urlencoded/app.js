const express = require('express');

const app = express();

app.use(express.json());  //body.request --> json
app.use(express.urlencoded());//this is also an midlewear we can pass the body as x-www-from-urlencoded
//as key and values 
//and boy is lok like this 
//key=value&key=value


app.get('/',(req,res)=>{
    res.send('server started');
})



app.post('/api/post/json',(req,res)=>{

    res.send(
        {
            message:"Json get successfully",
            body:req.body
        }
    );
});

app.post('/api/post/urlencode',(req,res)=>{

    res.send(
        {
            message:"Urlencoded get successfully",
            body:req.url.replace
        }
    );
});

const port = process.env.PORT|| 3000;

app.listen(port,()=>console.log("serever running at port "+port));

