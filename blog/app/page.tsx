import Image from "next/image";

export default function Home() {
  return (
    <div>
        
        <div className="container mx-auto p-8">
   
    <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
    <div className="space-y-4">
   
      <div className="bg-white shadow-md rounded p-4">
        <h2 className="text-2xl font-semibold">Blog Post Title</h2>
        <p className="text-gray-600">Short description or excerpt of the blog content...</p>
        <div className="mt-4 flex space-x-2">
          <a href="detail.html" className="bg-blue-500 text-white px-4 py-2 rounded">View Details</a>
          <a href="edit.html" className="bg-yellow-500 text-white px-4 py-2 rounded">Edit</a>
          <button className="bg-red-500 text-white px-4 py-2 rounded" onClick="confirm('Are you sure you want to delete this blog?')">Delete</button>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}
