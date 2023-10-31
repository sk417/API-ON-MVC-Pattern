const mongoose = require("mongoose");

var teacherSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("teacher",teacherSchema);