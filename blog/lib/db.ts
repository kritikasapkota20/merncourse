import mongoose from "mongoose";
export const connectdb=()=>{
    return mongoose.connect("mongodb://localhost:27017/my-blog");
}