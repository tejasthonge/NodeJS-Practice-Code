
//Config:
// -to confation app like to store the database deferntly at time of developement
// -thire loot of package for app confuragation one is 
// -1 config


//run sudo npm i config       
//config is esy to manage our app confugartion

const config = require('config');
const express = require('express');
const app = express();

//now create the folder and files as bellow name must be same
/*
project/
├── config/
│   ├── default.json
│   ├── development.json
│   ├── production.json
│   ├── test.json
│   └── custom-environment-variables.json
*/

//and the wirte the configuratin as we want 

//accasse it as bell

const appName = config.get('name');
const host = config.get("mail.host");
console.log(`Name of app : ${appName}`);
console.log(`host of app : ${host}`);


/*
Name of app : My app -production
host of app : prod-mail-server
*/

// it get the production filre the reson of we set the NODE_ENV as production 

//now we change to development
//by run export NODE_ENV=development
//then 
/*
 export NODE_ENV=development
~/coding/github/NodeJS-Practice-Code/5_Express_advanced/6_configuratin_node_app >_ node app.js                
Name of app : My app -development
host of app : dev-mail-server
*/

//now it getting the development settings 



