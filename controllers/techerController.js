const teacher = require("../models/teacher");
const add_teacher = async(req,res)=>{
    try {
       var details = new details({
        name: req.body.name,
        email: req.body.email,
        course: req.body.course
       });
       const saved = await details.save();
       res.status(200).send({success:true,msg:"teacher added",data:saved}); 
    } catch (error) {
        res.status(400).send({success:false,msg:error.message});
    }
}
module.exports = {
    add_teacher
}