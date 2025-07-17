"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useForm } from "@tanstack/react-form";
import { BlogSchema } from "@/types/blog";
import { error } from "console";

const CreateBlog = () => {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      author: "",
      title: "",
      shortNote: "",
      content: "",
      image: "",
      publishedDate: "",
    },
    onSubmit: async ({ value }) => {
      try {
        const response = await fetch("/api/blogs/post", {
          method: "POST",
          body: JSON.stringify(value),
        });
        const blogData = await response.json();
        if (response.status === 201) {
          toast.success("🎉 Blog published successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          form.reset();
          setTimeout(() => {
            router.push("/");
          }, 5000);
        } else {
          toast.error(blogData.error || "Error publishing blog");
        }
      } catch (error: any) {
        toast.error("Unexpected error: " + error.message);
      }
    },
  });

  return (
    <div className="min-h-screen w-screen bg-orange-100 flex flex-col items-center p-6 pt-32 text-black">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-4">Create A Blog</h1>
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >

        <form.Field
          name="author"
          validators={{
            onChange: BlogSchema.shape.author
          }}
        >
          {(field) => (
            <>
              <label className="block font-medium mb-1">Author</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="e.g. Aisha Rao"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors && <p className="text-red-500">{field.state.meta.errors[0]?.message}</p>}
            </>
          )}
        </form.Field>



        <form.Field
          name="title"
          validators={{
            onChange: ({ value }) => (!value.trim() ? "Title is required" : undefined),
          }}
        >
          {(field) => (
            <>
              <label className="block font-medium mb-1">Title</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="e.g. Docker Simplified"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <p className="text-red-500">{field.state.meta.errors?.[0]}</p>
            </>
          )}
        </form.Field>



        <form.Field
          name="shortNote"
          validators={{
            onChange: ({ value }) =>
              value.length > 100
                ? "Short Note cannot exceed 100 characters"
                : undefined,
          }}
        >
          {(field) => (
            <>
              <label className="block font-medium mb-1">Short Note</label>
              <textarea
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Glimpse, should not exceed 100 characters..."
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <p className="text-red-500">{field.state.meta.errors?.[0]}</p>
            </>
          )}
        </form.Field>



        <form.Field
          name="content"
          validators={{
            onChange: ({ value }) =>
              value.trim().length < 10
                ? "Content must be at least 10 characters"
                : undefined,
          }}
        >
          {(field) => (
            <>
              <label className="block font-medium mb-1">Content</label>
              <textarea
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Write your blog content here..."
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <p className="text-red-500">{field.state.meta.errors?.[0]}</p>
            </>
          )}
        </form.Field>



        <form.Field name="publishedDate">
          {(field) => (
            <>
              <label className="block font-medium mb-1">Published Date</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <p className="text-red-500">{field.state.meta.errors?.[0]}</p>
            </>
          )}
        </form.Field>



        <form.Field name="image">
          {(field) => (
            <>
              <label className="block font-medium mb-1">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                className="w-full text-green-500"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) field.handleChange(file.name);
                }}
              />
              <p className="text-red-500">{field.state.meta.errors?.[0]}</p>
            </>
          )}
        </form.Field>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 transition cursor-pointer"
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
