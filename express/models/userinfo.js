const mongoose=require("mongoose");
const userschema=new mongoose.Schema({
    name:String,
    address:String,
    age:Number,
    gender:{
        type:String,
        enum:['Male','Female','Others']
    }

})
const userdetail=mongoose.model("userinfo",userschema);
module.exports=userdetail;