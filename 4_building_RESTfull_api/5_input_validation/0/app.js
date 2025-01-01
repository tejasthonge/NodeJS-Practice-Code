
const express = require('express');
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

    if(!req.body.title || req.body.title.length < 3){
        res.status(
            400 //bad request
        ).send( {

            message:"tile is require and hanve minimum 3 charector"
        });
        res.end();
        return;
    }
    else{

        category.push( 
            { 
                id :category.length +1,
                title:req.body.title
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

//by this way we can handle input validation but for coplix validation it is very deficut so we use joi package
