
const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json());

const students = [

    {
        id: 1,
        name: "Ram",
        marks:100,
    },
    {
        id: 2,
        name: "Amar",
        marks:35,
    },
    {
        id: 3,
        name: "Tejas",
        marks:37,
    }
];


app.get('/',(req,res)=>{

    res.send("App Put");
})

app.put('/api/students/updage/:id',(req,res)=>{


    //Look the the student is present in given id or not
    // if present 
    //  -validate:200
    //  -invalide :400
    // if not present :404
    const schema = Joi.object(
     {
        marks: Joi.number().min(0).required() 
     }
    );

    const {value,error} = schema.validate(req.body);
    

    var student = students.find(e=>e.id === parseInt(req.params.id ));
    if(!student){
        res.status(404).send({
            massage:`The student is not found at id ${req.params.id}`
        })
    }
    else{
        if(error){
            res.status(400).send(
                {
                    massage:error.details[0].message
                }
            )
    
        }
        else if(value){
            student.marks = req.body.marks
            res.status(200).send(
                {
                    massage:"Marks Updated Successfully",
                    updatedStudent:student
                }
            )
            
        }
       
    }
});

const port = process.env.PORT || 3000;

app.listen(port,()=>console.log(`server port listening at : ${port}`))