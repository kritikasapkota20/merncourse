//Create an API to 
//1. get /users
//2. get /users/1
//3. post /users/add
//4. patch /user/update/1
//5. delete /user/delete/2
const express=require("express");
const mongoose=require("mongoose");

const app=express();

const port =3001;
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/one-thirty-shop").then(() => {
    console.log('Db connectd.')
})
const userschema=new mongoose.Schema({
    name:String,
    price:Number,
});
const User=mongoose.model("users",userschema);
let users=[{
    id:1,
    name:"Ram",
age:10,
school:"Nature Boarding School"
},
{
    id:2,
    name:"Kritika",
age:15,
school:"Seabird Boarding School"
},{
    id:3,
    name:"Krit",
age:19,
school:"VS Niketan School"
},{
    id:4,
    name:"Saswot",
age:10,
school:"Nature Boarding School"
}
]

app.get("/users",(req,res)=>{
    // res.json({
    //     message:"Data fetched successfully",
    //     data:users
    // })
    User.find().then(users => {
        res.json({
            message:"Data fetched successfully",
            data:users
        })
    })
})
app.get("/users/:userid",(req,res)=>{
// const user=users.find((user)=>
// user.id=+req.params.userid
// )
// res.json({
// data:user
// })
User.findById(req.params.userid).then(users=>{
    res.json({
        message:"product fetched successfully",
        data:users
    })
})


})
app.get("/users",(req,res)=>{
    const search=req.query.search;
    let data=users;
    if(search){
      data=users.filter(user=>{
        return user.name.toLowerCase().includes(search.toLowerCase());
      }
        
      )  
    }
    res.json({
        message:"Data updated",
        data
    })
})
app.post("/users/adduser",(req,res)=>{
    // users.push(req.body);
    // res.json({
    //   message:"Products added successfully"
    // })
    User.create(req.body).then(()=>{
        res.json({
            message:"User added sucessfully"
        })
    })
    
})
app.patch("/users/update/:id",(req,res)=>{
    const id=req.params.id;
    const updateduser=users.find((user)=>
        user.id===+id
    );
    updateduser.name=req.body.name;
    res.json({
        message:"user updated",
        data:updateduser
    })
})
app.delete("/users/delete/:id",(req,res)=>{
// const id=req.params.id;
// users=users.filter(user=>
//     user.id!==+id
// )
// res.json({
//     message:"user deleted",
//     data:users
// })
User.deleteOne({_id:req.params.id}).then(()=>{
    res.json({
        message:"User deleted",
    
    })
    })
})

app.listen(port,()=>{
    console.log("User data loading");
})