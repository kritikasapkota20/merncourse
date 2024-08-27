const express=require("express");
const router=express.Router();
const{
    createuser,
    getuser,
    getuserbyid,
    updateuserbyid,
    deleteuserbyid
}=require("../controllers/userinfo.controller");
router.post("/",createuser);
router.get("/",getuser);
router.get("/:userId",getuserbyid);
router.patch("/:userId",updateuserbyid);
router.delete("/:userId",deleteuserbyid);
module.exports=router;