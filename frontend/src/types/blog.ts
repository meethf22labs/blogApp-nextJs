import { z } from "zod"

export const BlogSchema = z.object({
  author: z.string().min(1, "Author is required"),
  title: z.string().min(1, "Title is required"),
  shortNote: z.string().max(100, "Short Note can not exceed 100 characters"),
  content: z.string().min(10, "Content must be atleast 10 characters"),
  image: z.string().optional(),
  publishedDate: z.string().optional()
})


export type BlogFormat = z.infer<typeof BlogSchema>