
const express = require('express');
const Joi = require('joi');  //it import class Joi
const app = express();



app.use(express.json());

var category = [

    {
        id:1,
        title:"Food"
    }
];

app.get('/',(req,res)=>{

    res.send("Category api");
});

app.post('/api/createCategory',(req,res)=>{

    const schema = Joi.object({
        title:Joi.string().min(3).required()  //here we applying the property as min length 3 and must be require
    });
    const {error ,value} = schema.validate(req.body); //it return the object and have the two propertyes value and the error

    
    // if(!req.body.title || req.body.title.length < 3){
    //in repless of above we use as
    if(error){
        res.status(
            400 //bad request
        ).send( {
           "massage":error.details[0].message
        });
        res.end();
        return;
    }
    else if(value){

        category.push( 
            { 
                id :category.length +1,
                title:value.title
            }
        )

        res.status(201).send(
            {
                massage:"Catgory Creatd Successfully",
                cotgoryes:category
            }
        );
        res.end();
    }
});


const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`listning at prot ${port}`));


