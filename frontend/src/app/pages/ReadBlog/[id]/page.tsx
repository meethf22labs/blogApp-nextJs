//import blogPosts from "@/app/data/blogData";

export default async function ReadBlog({ params }: { params: { id: string } }) {
  // code for static ->
  // const postIndex = parseInt(params.id);
  // const post = blogPosts[postIndex];
  // if (!post) {
  //   return <div className="p-8 text-xl text-red-500">Blog not found.</div>;
  // }
  // <-

  const api_url = `http://localhost:3000`;
  const response = await fetch(`${api_url}/api/blogs/${params.id}`);
  const data = await response.json();
  console.log(">>>", data)
  const post = data[0]

  return (
    <>
    <div className="py-12 max-w-4xl mx-auto pt-32">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-2">
        By {post.author} • {post.publishedDate}
      </p>
      <img src='https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg' alt={post.title} className="w-full max-h-96 object-cover rounded-lg shadow mb-6" />
      <p className="text-lg leading-relaxed whitespace-pre-wrap">{post.content}</p>
    </div>
    </>
  );
}