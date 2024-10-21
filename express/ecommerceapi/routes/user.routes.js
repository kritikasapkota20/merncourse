const express=require("express");
const router=express.Router();
const {signup,signin,updateUser,signout}=require("../controllers/user.controllers");
const {body}=require("express-validator")
// const validate=require("../middleware/validation.middleware");
const multer=require('multer');
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads/");
    },
    filename:function(req,file,cb){
        const uniquesuffix=Date.now()+"-"+Math.round((Math.random()*1e9));
        const fileextension=file.mimetype.split("/")[1];
        cb(null,Date.now()+"."+fileextension);
    }
})
const upload=multer({storage:storage});

// const signupvalidator= [body("name").notEmpty().isLength({min:3,max:100}).withMessage("please enter the valid name"),body("email").notEmpty().isEmail().withMessage("please enter the valid email"),body("password").notEmpty(),validate]
router.post("/signup",upload.single('image'),signup);
router.post("/signin",signin);
router.post("/signout",signout);
router.patch("/updateuser",updateUser);
module.exports=router;
// .notEmpty,body("email").notEmpty(),body("password").notEmpty().isStrongPassword(),validate,body("name")
    // "dev": "nodemon --env-file=.env main.js",
