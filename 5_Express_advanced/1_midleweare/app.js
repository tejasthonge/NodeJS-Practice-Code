const express = require('express');
const app =express();
app.use(express.json()) //here the use using the express.json() 

//- this was woring as midlewere for the requst to parse in to json object
// - when we using the req.body it get the json objet
//- it enernaly express.json() return the 

// requst prossecing pipline 

/*

request-----<midelwere1>---<moldewere2>---<midleweareN> -----respose
request-----<jeson()>---<routeHndler -----respose

*/

//in requst posscing pipeline thire are one or more midlewer like express.json()

//another midlewer function is route hadlereis 
//it is nothing but we using get ,post...
//methods that time what actully happing in that route 

app.get('/',(req,res)=>{

    //this is route handle 
    // -- it also working as midlewere
     
})

//the express aplication is nothing but a bunch of midlewere functions
