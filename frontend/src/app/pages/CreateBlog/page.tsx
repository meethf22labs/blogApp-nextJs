"use client"
import React, { useState } from 'react';
import data from "../../data/blogData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation';


type formDataFormat = {
  author: string,
  title: string,
  content: string,
  image: string,
  publishedDate: string
}



const CreateBlog = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<formDataFormat>({
    author: "",
    title: "",
    content: "",
    image: "",
    publishedDate: ""
  })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData(prev => ({
        ...prev,
        image: imageUrl
      }));
    } else {
      console.log("No file selected");
    }
  }


  const handleSubmit = (e: React.FormEvent) => {
    // console.log("Local Data :", data)
    e.preventDefault();
    data.push(formData);
    toast.success("🎉 Blog published successfully!", {
      position: "top-right",
      autoClose: 3000,
    });

    setFormData({
      author: "",
      title: "",
      content: "",
      image: "",
      publishedDate: ""
    })
    console.log("Form Submitted :", formData)

    setTimeout(() => {
      router.push('/');
    }, 5000);

  }

  console.log(data)


  return (
    <div className='h-screen w-screen bg-orange-100 flex flex-col items-center p-6 pt-32'>
      <ToastContainer />
      <h1 className='text-3xl font-bold mb-4'>Create A Blog</h1>
      <form className='bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4' onSubmit={handleSubmit}>

        <div>
          <label htmlFor='author' className='block font-medium mb-1'>Author</label>
          <input
            type='text'
            id='author'
            name='author'
            className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500'
            placeholder='e.g. Aisha Rao'
            value={formData.author}
            onChange={handleChange}
          />
        </div>


        <div>
          <label htmlFor='title' className='block font-medium mb-1'>Title</label>
          <input
            type='text'
            id='title'
            name='title'
            className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500'
            placeholder='e.g. Docker Simplified'
            value={formData.title}
            onChange={handleChange}
          />
        </div>


        <div>
          <label htmlFor='content' className='block font-medium mb-1'>Content</label>
          <textarea
            id='content'
            name='content'
            rows={4}
            className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500'
            placeholder='Write your blog content here...'
            value={formData.content}
            onChange={handleChange}
          />
        </div>


        <div>
          <label htmlFor='date' className='block font-medium mb-1'>Published Date</label>
          <input
            type='date'
            id='date'
            name='publishedDate'
            className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500'
            value={formData.publishedDate}
            onChange={handleChange}
          />
        </div>


        <div>
          <label htmlFor='image' className='block font-medium mb-1'>Upload Image</label>
          <input
            type='file'
            id='image'
            name='image'
            accept='image/*'
            className='w-full text-green-500'
            onChange={handleImageChange}
          />
        </div>


        <button
          type='submit'
          className='w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 transition cursor-pointer'
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;