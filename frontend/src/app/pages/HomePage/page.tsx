"use client"
import React, { useEffect, useState } from 'react';
import BlogCard from '@/app/components/BlogCard';
import data from "../../data/blogData";


type BlogPost = {
  id: number;
  author: string;
  title: string;
  content: string;
  image: string;
  publishedDate: string;
};

const HomePage = () => {
  const [postData, setPostData] = useState<BlogPost[]>([])

  useEffect(() => {
    setPostData(data)
  }, [])
  
  return (
    <>
      <div className=' flex flex-wrap justify-center items-center py-10 gap-10 top-28'>
        {postData.length === 0 ? <h1>No Posts</h1> : (data.map ((postData, index) => (
          <div key={index}>
            <BlogCard postData={postData} index={index}/>
          </div>
        )))}
      </div>
    </>
  )
}

export default HomePage