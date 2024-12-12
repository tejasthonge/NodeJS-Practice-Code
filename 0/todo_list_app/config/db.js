


const mongoose = require('mongoose');


const connectD=async ()=>{


    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Connected to successfully");
    }
    catch(error){
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectD;