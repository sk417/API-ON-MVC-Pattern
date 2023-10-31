const express = require("express");
const teacher_route = express();

const body_parser=require("body-parser");
teacher_route.use(body_parser.json());
teacher_route.use(body_parser.urlencoded({extended:true}));

const auth = require("../middleware/auth");

const teacherController = require("../controllers/techerController");
teacher_route.post("/add-teacher",auth,teacherController.add_teacher);

module.exports=teacher_route;