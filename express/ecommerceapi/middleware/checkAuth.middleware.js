const {JWT_SECRET_KEY}=require("../config/constant");
const jwt=require("jsonwebtoken");
const checkAuth=(req,res,next)=>{
    // console.log(token);
  try{
    const {token}=req.headers;


    // const user = jwt.verify(req.headers, JWT_SECRET_KEY);
    // const user = jwt.verify(token,JWT_SECRET_KEY );
    // console.log(user);
    // if(!user.role.includes("Admin")){
    //     res.status(401).json({
    //         message:"unauthorized action"
    //     })
    //     return;
    // }
    // req.authuser=user;

    // console.log(req.authuser._id);
    next();

    // console.log(user);
   
//   console.log(data);
    }catch(error){
        res.status(401).json({
            message:"Unauthorized"
        })
    }
}
module.exports=checkAuth;