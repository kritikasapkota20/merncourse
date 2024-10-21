const express=require("express");
const app=express();
const db=require("./config/db");
const port=4001;
const productroute=require("./routes/product.routes");
const userroute=require("./routes/user.routes")
const cors=require("cors");
require("express-async-errors");
app.use(express.json());
app.use(cors());

db();
app.use("/api/products",productroute);
app.use("/api/user",userroute);
app.use(express.static("uploads"));

app.all("*",(req,res)=>{
    res.status(404).json({
        message:"Route not found"
    })
})
app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).json({
        message:"Something went wrong"
    })
})


app.listen(port,()=>{
console.log("Ecommerce app listening on port "+port);
})