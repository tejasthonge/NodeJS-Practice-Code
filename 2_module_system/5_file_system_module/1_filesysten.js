

const fs = require('fs');

// console.log(fs)


// this work synchronuly
const currentFoldrsfiles = fs.readdirSync('./');  //it wii read all the file and folders of current  and return
const previuseFolderfiles = fs.readdirSync('../');  //it wii read all the file and folders of previuse folderand return
const moduleSustemFile = fs.readdirSync('./2_module_system');  //it wii read all the file and folders of previuse folderand return
console.log(currentFoldrsfiles);
console.log(previuseFolderfiles);
console.log(moduleSustemFile);
//all return in string array



//ascichronus 

fs.readdir('./',function(error,files){
    if (error) console.log(error);
    else console.log(files);
});

