const jwt = require("jsonwebtoken");

const secretKey="jwtsecretkey";

const verifyToken = async(req,res,next)=>{
    const token=req.body.token || req.query.token || req.headers["authorization"];
    if(!token){
        res.status(400).send({success:false,msg:"token required"});
    }
    try {
        const decode = jwt.verify(token,secretKey);
        req.user=decode;
    } catch (error) {
        res.status(400).send("invalid users");
    }
    return next();
}

module.exports=verifyToken;