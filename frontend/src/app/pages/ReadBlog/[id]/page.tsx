import Image from "next/image";

export default async function ReadBlog({ params }: { params: { id: string } }) {

  const api_url = process.env.API_URL;
  const response = await fetch(`${api_url}/api/blogs/${params.id}`);
  const data = await response.json();
  const post = data[0]

  return (
    <>
      <div className="py-12 max-w-4xl mx-auto pt-32">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-sm text-gray-600 mb-2">
          By {post.author} • {post.publishedDate}
        </p>
        <Image
          src='https://images.unsplash.com/photo-1587620962725-abab7fe55159?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8'
          alt={post.title}
          width={100}
          height={100}
          className="w-full max-h-96 object-cover rounded-lg shadow mb-6" />
        <p className="text-lg leading-relaxed whitespace-pre-wrap">{post.content}</p>
      </div>
    </>
  );
}