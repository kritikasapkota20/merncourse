const mongoose=require("mongoose");
const db=async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/ecommerceapi")
//   await  mongoose.connect(process.env.MONGO_DB_URL);

        console.log("Database connected");
    }catch(error){
console.log(error);
    }
}
module.exports=db;