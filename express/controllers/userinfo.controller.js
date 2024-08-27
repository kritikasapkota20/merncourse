const user = require("../models/userauth");
const userinfo=require("../models/userinfo");
const createuser=async (req,res)=>{
    const userdetails=await userinfo.findOne(req.body);
    if(userdetails){
        res.status(400).json({
            message:"User with this data already exist"

        })
        return;
    }
  await userinfo.create(req.body);
  res.status(201).json({
    message:"user added successfully"
  })

}
const getuser=async(req,res)=>{
   const get_data= await userinfo.find();
   res.status(200).json({
    message:" user's data fetched successfully",
    data:get_data
   })
}
const getuserbyid=async(req,res)=>{
    const userdetail=await userinfo.findById({_id:req.params.userId});
    res.status(200).json({
        message:" user's data fetched successfully ",
        data:userdetail
    })
}
const updateuserbyid=async(req,res)=>{
const  id=req.params.userId;
    const data=await userinfo.updateOne({_id:id},req.body);
    res.status(200).json({
        message:"user updated sucessfully",
        
    })
}
const deleteuserbyid=async(req,res)=>{
  await userinfo.deleteOne({_id:req.params.userId});
  res.status(200).json({
    message:"User data deleted successfully"
  })
}
module.exports={
    createuser,
    getuser,
    getuserbyid,
    updateuserbyid,
    deleteuserbyid
}