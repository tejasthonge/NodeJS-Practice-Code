

const  p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
            resolve("Done");
            // reject(new Error("Error"));
    },2000);
});

console.log("before");
p
.then(result=>console.log(result))
.catch(error=>console.log(error.message));
console.log("after");

/*
pending ---> either resove(fullfild) or reject(rejectd)

thes obove is stages of promises
//it is the modified version of callbacl provided by js

//
*/

