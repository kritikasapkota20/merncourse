import mongoose from "mongoose";
const postSchema=new mongoose.Schema({
    title:String,
    content:String
})
 export const Post= mongoose.models.Post ||mongoose.model("Post",postSchema);
