const express = require("express");
const favour_route = express();

const body_parser=require("body-parser");
favour_route.use(body_parser.json());
favour_route.use(body_parser.urlencoded({extended:true}));

const auth = require("../middleware/auth");

const addFavour = require("../controllers/favouriteController");

favour_route.post('/favourite',auth,addFavour.add_to_favourite);

favour_route.delete('/remove',auth,addFavour.remove_from_favourite);

module.exports=favour_route;
