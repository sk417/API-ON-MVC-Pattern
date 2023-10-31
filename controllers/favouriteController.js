const fav = require("../models/favouritModel");

const add_to_favourite = async(req,res)=>{
    try {
        const fav_obj = new fav({
            teacher_id:req.body.teacher_id,
            name:req.body.name
        });

        const favData = await fav_obj.save();
        res.status(200).send({success:true,msg:"added in your favourite",data:favData});

    } catch (error) {
        res.status(400).send({success:false,msg:error.message});
    }
}

const remove_from_favourite = async(req,res)=>{
    try {
        const id=req.body.teacher_id;
        const removeData = await fav.findByIdAndDelete(id);
        res.status(200).send({success:true,msg:"Removed data",data:favData});
    } catch (error) {
        res.status(400).send({success:false,msg:error.message});
    }
}
module.exports = {
    add_to_favourite,
    remove_from_favourite
}