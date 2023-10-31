const user = require("../models/userModel");
const jwt = require("jsonwebtoken");

// we can use bcrypt.js for hashing the password

const secretKey="jwtsecretkey";
const creat_token = async(id)=>{
    try {
        const token=await jwt.sign({_id:id},secretKey);
        return token;
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const user_login = async(req,res)=>{
    try {
        const email=req.body.email;
        const password=req.body.password;
        const userData = await user.findOne({email:email});
        if(userData){
            if(password===userData.password){
                const tokenData = await creat_token(userData._id);
                const userResult = {
                    _id:userData._id,
                    name:userData.name,
                    email:userData.email,
                    token:tokenData
                }
                const response = {
                    success:true,
                    msg:"user details",
                    data:userResult
                }
                res.status(200).send(response);
            }
            else{
                res.status(200).send("login details are incorrect");
            }
        }
        else{
            res.status(200).send("login details are incorrect");
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    user_login
}