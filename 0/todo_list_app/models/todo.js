

const mongoose = require("mongoose");

const TodoSchema =new mongoose.Schema({
    title:{
        type : String,
        required : true
    },
    discription:{
        type :String,
        required :true
    },
    isCompleted:{
        type: Boolean,
        required :false
    }

}); 

module.exports = mongoose.model('Todo',TodoSchema);
