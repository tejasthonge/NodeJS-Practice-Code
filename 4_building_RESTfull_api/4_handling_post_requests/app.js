

const express = require("express");
const app = express();



app.use(express.json()); //if we not define the midlewere what type of data body is come in which type then we got this bellow error

/*
TypeError: Cannot read properties of undefined (reading &#39;name&#39;)<br> &nbsp; &nbsp;at /Users/tejasthonge/coding/github/NodeJS-Practice-Code/4_building_RESTfull_api/4_handling_post_requests/app.js:33:24<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/tejasthonge/coding/github/NodeJS-Practice-Code/4_building_RESTfull_api/4_handling_post_requests/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at next (/Users/tejasthonge/coding/github/NodeJS-Practice-Code/4_building_RESTfull_api/4_handling_post_requests/node_modules/express/lib/router/route.js:149:13)<br> &nbsp; &nbsp;at Route.dispatch (/Users/tejasthonge/coding/github/NodeJS-Practice-Code/4_building_RESTfull_api/4_handling_post_requests/node_modules/express/lib/router/route.js:119:3)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/tejasthonge/coding/github/NodeJS-Practice-Code/4_building_RESTfull_api/4_handling_post_requests/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at /Users/tejasthonge/coding/github/NodeJS-Practice-Code/4_building_RESTfull_api/4_handling_post_requests/node_modules/express/lib/router/index.js:284:15<br> &nbsp; &nbsp;at Function.process_params (/Users/tejasthonge/coding/github/NodeJS-Practice-Code/4_building_RESTfull_api/4_handling_post_requests/node_modules/express/lib/router/index.js:346:12)<br> &nbsp; &nbsp;at next (/Users/tejasthonge/coding/github/NodeJS-Practice-Code/4_building_RESTfull_api/4_handling_post_requests/node_modules/express/lib/router/index.js:280:10)<br> &nbsp; &nbsp;at expressInit (/Users/tejasthonge/coding/github/NodeJS-Practice-Code/4_building_RESTfull_api/4_handling_post_requests/node_modules/express/lib/middleware/init.js:40:5)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/tejasthonge/coding/github/NodeJS-Practice-Code/4_building_RESTfull_api/4_handling_post_requests/node_modules/express/lib/router/layer.js:95:5
*/



var employees = [
    {
        id: 1,
        name: "Tejas",
        role: "Mobile Developer"
    }
];



app.get('/',(req,res)=>{
    res.send("Ram ram")
});

app.get('/api/empoloyee',(req,res)=>{
    res.send(employees);

});

app.post('/api/createEmpoloyee', function (req, res) {

    const newEmpoyee = {
        id: employees.length + 1,
        name: req.body.name, // here we accassing the body form req that time we must
        role:req.body.role
    }

    employees.push(newEmpoyee);
    res.send({
        massage:"Emoployee Created Succussfully",
        employees:employees
    });
})



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server listening at port ${port}`));

/*
{
    "massage": "Emoployee Created Succussfully",
    "employees": [
        {
            "id": 1,
            "name": "Tejas",
            "role": "Mobile Developer"
        },
        {
            "id": 2,
            "name": "Amar Thonge",
            "role": "Bakend Developer"
        }
    ]
}
*/