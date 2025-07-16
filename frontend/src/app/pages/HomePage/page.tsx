"use client"
import React, { useEffect, useState } from 'react';
import BlogCard from '@/app/components/BlogCard';
//import data from "../../data/blogData";


type BlogPost = {
  id: number;
  author: string;
  title: string;
  shortNote: string;
  content: string;
  image: string;
  publishedDate: string;
};

const HomePage = () => {
  const [postData, setPostData] = useState<BlogPost[]>([])

  useEffect(() => {
    //setPostData(data) -> static

    const fetchData = async () => {
      const response = await fetch("/api/blogs/get");
      const blogData = await response.json();
      console.log('datassss :', blogData);

      if (Array.isArray(blogData)) {
        setPostData(blogData);
      } else {
        console.error("Unexpected response format:", blogData);
        setPostData([]); // fallback to empty array
      }
    };

    fetchData();
  }, [])

  return (
    <>
      <div className=' flex flex-wrap justify-center items-center py-10 gap-10 top-28'>
        {postData.length === 0 ? <h1>No Posts</h1> : (postData.map((blog, index) => (
          <div key={index}>
            <BlogCard blog={blog} index={index} />
          </div>
        )))}
      </div>
    </>
  )
}

export default HomePage