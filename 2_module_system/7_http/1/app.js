

const http = require('http');

const server = http.createServer((req,res)=>{

    if(req.url == '/'){
        console.log("user at :/");
        res.write("Jay Shree Ram !");

    }
    else if(req.url === '/api/info'){  
        console.log("user at :/api/info");
        res.write(JSON.stringify(
            {

                info:{
                    name:"Tejas Thonge",
                    dharm:"Hindu-Maratha",
                    age:"23",
                    eduction:"Last Year YD",
                    target:"Buid ...."
                }
            }
        )
        );
    }

    res.end();

});

server.listen(3000);
console.log("serervee Running on the port 3000..");