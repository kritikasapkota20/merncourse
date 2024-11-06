export default function addblog(){
    const createPost=async()=>{
        "use server"
        // const Post=new P
    }
    return( <div className="container mx-auto p-8">
    <h1 className="text-3xl font-bold mb-6">Add New Blog</h1>
    <form action={createPost} className="bg-white shadow-md rounded p-6">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700">Title:</label>
        <input type="text" id="title" name="title" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter blog title" required/>
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700">Content:</label>
        <textarea id="content" name="content" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter blog content" rows={6} required></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Create Blog</button>
    </form>
  </div>)
}