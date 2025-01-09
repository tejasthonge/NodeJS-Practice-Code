
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground').then(
    result=>console.log("Connected to mongodb"+result)
).catch(error=>console.log(error));

//mongoose.connect at alling time we have to pass the database pass and it will return the propinse