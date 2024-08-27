const mongoose=require("mongoose");
const Products=require("../models/product");
const {query,validationResult}=require("express-validator");
const validator=require("../middleware/validation.middleware")
const addproduct=async(req,res,next)=>{
try{
await Products.create({
    name:req.body.name,
    price:req.body.price,
    user:req.authuser._id,
    image:req.file.filename

})
// console.log(req.file);


res.status(200).json({
    message:"Products added successfully"
})}catch(error){
    // res.status(400).json({
    //     message:"Something went wrong"
    // })
    next(error);
}

}
const getproduct=async(req,res,next)=>{
//  const product= await  Products.find();
const {page=1,limit=5}=req.query;
 
const sortbyfilter={};
if(req.query.order){
sortbyfilter.price=req.query.order;
}
 const product=await Products.find({
    name:new RegExp(req.query.search),
    // price:{$gte:req.query.minprice,$lte:req.query.maxprice}
 }).sort(sortbyfilter).limit(limit).skip(((page??1)-1)*limit??10)
 const total=await Products.countDocuments();
 res.status(200).json({
    message:"Product fetched successfully",
    data:{
        page,
        total,
       data: product,
    }
    
 })
}
const findproductbyid=async(req,res)=>{
  const product=  await Products.findOne({_id:req.params.productid});
    res.status(200).json({
        message:"Product by id fetched successfully",
        data:product
    })
}
const deleteProductById=async(req,res)=>{
    await Products.deleteOne({_id:req.params.productid});
    res.status(200).json({
        message:"Product deleted successfully"
    })
}
const updateProductById=async(req,res)=>{
    const id=req.params.id;
    await Products.updateOne({_id:req.params.productid},req.body);
    res.status(200).json({
        message:"Product updated succefully"
    })
}
module.exports={
    addproduct,
    getproduct,
    findproductbyid,
    deleteProductById,
    updateProductById,
    
}