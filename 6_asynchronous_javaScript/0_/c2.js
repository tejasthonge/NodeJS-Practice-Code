

function getName(id) {
    const names = ['amar', 'bala', 'ram'];
    setTimeout(() => {
        return names[id];
    },
        2000
    );

}

console.log("start");
var userName = getName(1);
console.log(userName);
console.log("end");


//op:
/*
start
undefined
end

*/

//it not waait till it get the name 
//it exucute the next line