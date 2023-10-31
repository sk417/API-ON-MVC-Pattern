const express=require("express");
const user_route=express();

const bodyParser = require("body-parser");
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended:true}));

const user_controller = require("../controllers/userController");

const auth = require("../middleware/auth");

user_route.post('/login',user_controller.user_login);

user_route.get('/test',auth,function(req,res){
    res.status(200).send({success:true,msg:"Authenticated"});
});

module.exports = user_route;