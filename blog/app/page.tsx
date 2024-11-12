import { connectdb } from "@/lib/db";
import { Post } from "@/models/Post";
import { revalidatePath } from "next/cache";
import Image from "next/image";

export default async function Home() {
  await connectdb();
  const posts=await Post.find();
const deletepost=async (formData:FormData)=>{
"use server"
await connectdb();
const postid=formData.get('id');
await Post.findByIdAndDelete(postid);
revalidatePath('/');
}

  return (
    <div>
        
        <div className="container mx-auto p-8">
   
    <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
    <div className="space-y-4">
      {posts.map((post)=>(
 <div key={post._id.toString()} className="bg-white shadow-md rounded p-4">
 <h2 className="text-2xl font-semibold">{post.title}</h2>
 <p className="text-gray-600">{post.content}</p>
 <div className="mt-4 flex space-x-2">
   <a href="detail.html" className="bg-blue-500 text-white px-4 py-2 rounded">View Details</a>
   <a href="edit.html" className="bg-yellow-500 text-white px-4 py-2 rounded">Edit</a>
   <form  action={deletepost}>
    <input type="hidden" name="id" value={post._id.toString()}/>
   <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded" >Delete</button>

   </form>
 </div>
 </div>

      ))}
   
     
    </div>
  </div>
    </div>
  );
}
