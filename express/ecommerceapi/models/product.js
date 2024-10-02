const mongoose=require("mongoose");
const productSchema=new mongoose.Schema({
    name:String,
    price:Number,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    image:String,
    featured:Boolean,
    latest:Boolean
},
{
    timestamps: true,
  })
const Product=mongoose.model("products",productSchema);
module.exports=Product;