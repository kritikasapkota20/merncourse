const mongoose=require("mongoose");
const userschema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
type:String,
default:"customer"
    },
    profileimage:String
},{
    timestamps: true,
  })

const users=mongoose.model("Users",userschema);
module.exports=users;