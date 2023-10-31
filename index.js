const express= require("express");
const app=express();

 const mongoose = require("mongoose");
 mongoose.connect("mongodb://127.0.0.1.27017/student");

//student login route

const student_route = require("./route/userRoute");
app.use('/api',student_route);

//teacher route

const teacher_route = require("./route/teacherRoute");
app.use('/api',teacher_route);

//add to favourite route

const add_favourite_route = require("./route/favouriteRoute");
app.use('/api',add_favourite_route);

app.listen(3000, function(){
    console.log("Server is running at port 3000");
});