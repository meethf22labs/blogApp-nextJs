import blogPosts from "@/app/data/blogData";
import NavBar from "@/app/components/Navbar";

export default function ReadBlog({ params }: { params: { id: string } }) {
  const postIndex = parseInt(params.id);
  const post = blogPosts[postIndex];

  if (!post) {
    return <div className="p-8 text-xl text-red-500">Blog not found.</div>;
  }

  return (
    <>
    <NavBar/>
    <div className="px-8 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-2">
        By {post.author} • {post.publishedDate}
      </p>
      <img src='https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg' alt={post.title} className="w-full max-h-96 object-cover rounded-lg shadow mb-6" />
      <p className="text-lg leading-relaxed whitespace-pre-wrap">{post.fullContent}</p>
    </div>
    </>
  );
}