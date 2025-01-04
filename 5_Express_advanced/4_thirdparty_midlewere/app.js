//morgen :this is third party midlewere use to log some massages

const morgen = require('morgan');
const express = require('express');
const app = express();
app.use(morgen('tiny'));
app.get('/',(req,res)=>{
    res.send("server is running")
});
const port = process.env.PORT ||3000;
app.listen(port,()=>console.log(`server is running at prot ${port}`));

/*
server is running at prot 3000
GET / 200 17 - 1.698 ms

*/

//this second line is due the morgan midleware 
//it used to log the massage and req res time


/*
Morgan is a logging middleware for Node.js and Express applications. It helps in logging HTTP requests for debugging and monitoring purposes.

Why use Morgan?
Request Logging:
Logs details like HTTP method, URL, status code, response time, etc.
Useful for tracking API usage and diagnosing issues.
Customizable:
Predefined formats (dev, combined, tiny, etc.) and custom format options.
Integration with Tools:
Works with tools like Winston or file streams for advanced logging setup
*/