

const http =require('http');

// console.log(http)

const server = http.createServer();
server.on("connection",(scoket)=>{
    console.log("New Connection");
});

server.listen(3000);
console.log("Listing on  http://localhost:3000/")

//as we go in the  http://localhost:3000/ the emit the connection event 
//as we go it will print New Connection 

/*
OP
Listing on  http://localhost:3000/
New Connection
New Connection
*/

//this connetion is verry low level we con not use to creat actule serve 
// ...


/*
In Node.js, the http.Server class is used to create HTTP servers, 
while the net.Server class is a lower-level class used for creating TCP servers. 
The http.Server class is built on top of net.Server, 
which means it inherits functionality from net.Server and net.Server extends EventEimmiter


*/

