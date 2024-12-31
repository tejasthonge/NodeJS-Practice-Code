
const express = require("express"); //it is funtion
const app = express(); //it return the Express class object

//now the app hase the all the Express class method
//like

// app.get();
// app.post();
// app.put();
// app.delete();

app.get('/',(req,res)=>{
    console.log("user at : /")
    res.send("Jay Shree Ram")
});

app.get('/api/target',function(req,res){
    console.log("user at : /api/target")
    

    res.send(
        {target:[
            "Learing the Backed",
            "Microservices",
            "Devops",
            "Advanced Flutter",
            "Go as Backed",
            "Strating stratup",
            "Hindunisum"
        ]}
    )
})
// app.listen(3000,()=>{
//     console.log("listenig PORT 3000 ...");
// })


/*
app.get('url',fuction that was callad at this path);
app.listen(portNo ,functioncallad when stating or listen server)
*/

//if we change the code then we have to stope and then run so to handle the change and also run to the server 
//for that we have the nodemon package
// sudo npm i -g nodemon

//now we have to run the rude by
// nodemon index.js 
//insted of node index.js


//now above we use hard code PORT but by useg envamet vaible we get the port for that mation
//this is for after some time we host this sever to any service provide that time we dont know wich PORT is busy or not 
// so that we get the port as

const port = process.env.PORT || 3000; 

//above listen code commented 

app.listen(port,()=>console.log(`port listing at ${port}..`)); //the consol.log prit the 3000 the reson we use our local matchine for now 
//but if we hosted to anther server we use the anthor posrt that not busy 


//we also set the envrmetal varaible port value in mac as
//export PORT=8055

//after runing this command the the PORT lising at 8055

//this is proper way to asing the port the node aplication