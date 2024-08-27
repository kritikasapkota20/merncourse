const User=require("../models/user");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const {JWT_SECRET_KEY}=require("../config/constant")
const signup=async(req,res)=>{
  const {password,...remaining}=req.body;
  const user=  await User.findOne({email:req.body.email});
if(user){
    res.status(401).json({
        message:"User already exist"
    })
    return;
}
const salt=bcrypt.genSaltSync(10);
const hashedPassword=bcrypt.hashSync(password,salt);
  await  User.create({
    ...remaining,
    password:hashedPassword,
    image:req.file.filename

  });
  console.log(req.file.filename)
  // console.log(req.file.filename);
    res.status(200).json({
        message:"Signedup successfully"
    })
}
const signin=async(req,res)=>{
  const user=  await User.findOne({email:req.body.email});
  const isValidPassword=bcrypt.compareSync(req.body.password,user.password);
  
  
  if(!isValidPassword){
    res.status(401).json({
      message:"invalid credentials"
      
  })
    return;
    
  }
  
    if(user.role!="Admin"){
      res.status(200).json({
        message:"signedin successfully"
    })
return;
  }
const token=jwt.sign({
  _id:user._id,
  email:user.email,
  name:user.name,
  role:user.role

},JWT_SECRET_KEY,
{
  expiresIn:"10d"
}

)
res.status(200).json({
  message:"signedin successfully",
  token
})


  
   
    
  }
  const updateUser = async (req, res) => {
    const { password, ...updateData } = req.body;
    const userId = req.params.id;

     
        let user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // Hash the new password if provided
        if (password) {
            const salt = bcrypt.genSaltSync(10);
            updateData.password = bcrypt.hashSync(password, salt);
        }

        // Update the image if a new file is uploaded
        if (req.file) {
            updateData.image = req.file.filename;
        }

        // Update user data
        user = await User.findByIdAndUpdate(userId, updateData, { new: true });

        res.status(200).json({
            message: "User updated successfully",
            user
        });
      }
    
 

module.exports={
    signup,signin,updateUser
}
