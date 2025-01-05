console.log("before");
getData(1);
console.log("before");

function getData(id){
    setTimeout(()=>{
        console.log(`fatched Data at id ${id}`);
    },2000);
}

/*
OP
before
before
                        (delaye of 2 sec)
fatched Data at id 1

*/

//means the js work work asynchronisly by defoault 


//to handle the it we have three patterns 
//1. calllbacks 
//2. promises
//3. async/await