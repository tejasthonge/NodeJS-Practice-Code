
const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    console.log("Boss at :/");
    res.send("Jay Shree Ram");
});

//# Rout parametors
app.get('/api/states:id',(req,res)=>{
    var id = req.params.id;
    console.log(id);
    res.send(`you want state at id ${id}`);
});

//http://localhost:8055/api/states:12
//you want state at id :12


//#
app.get('/api/post/:year/:mont',(req,res)=>{
    const params = req.params;
    res.send(params);
})
//http://localhost:8055/api/post/2024/12
/*
{
  "year": "2024",
  "mont": "12"
}
*/
//this above rout parametors for exential values 
//for require values

// -------------------------------------------

//# Qurry String Parametors
app.get('/api/students/',(req,res)=>{
    var qurryParams = req.query;
    res.send(qurryParams);
})

//http://localhost:8055/api/students?sortBy=name
/*
{
  "sortBy": "name"
}
*/

const port = process.env.PORT;

app.listen(port,()=>console.log(`listing at PORT ${port}`));
