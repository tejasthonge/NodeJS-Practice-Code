


// console.log(module)

var url = 'http://tejas.io/log';

demo("Hello World");
console.log("out side the demo funtion");


function demo(massage){
    
    console.log(massage);
}

console.log("out side the demo funtion");

// sopose we have to access this funtion in anthor files that in anthor mode
//then that time exports keyboard comes 

module.exports.demo = demo;
module.exports.url = url;
// console.log(module)
