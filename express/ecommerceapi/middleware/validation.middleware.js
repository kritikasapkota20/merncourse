const {validationResult}=require("express-validator");
const validate=async(req,res,next)=>{
    const result= validationResult(req);
    if(result.array().length==0){
        next();
        return;
    }
    res.status(401).json({
        message:"Bad Request",
        errors:result.array()
    })
}
module.exports=validate;