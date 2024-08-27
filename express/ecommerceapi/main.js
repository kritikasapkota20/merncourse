const express=require("express");
const app=express();
const db=require("./config/db");
const port=4001;
const productroute=require("./routes/product.routes");
const userroute=require("./routes/user.routes")
require("express-async-errors");
app.use(express.json());
db();
app.use("/products",productroute);
app.use("/user",userroute);
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