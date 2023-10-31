const mongoose = require("mongoose");

const favour = mongoose.Schema({
    teacher_id:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("favourite",favour);