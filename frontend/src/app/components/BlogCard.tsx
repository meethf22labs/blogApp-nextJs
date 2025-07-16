import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { CardMedia } from '@mui/material';
import Link from "next/link";

type BlogCardProps = {
  blog: {
    id: number;
    author: string;
    title: string;
    shortNote: string;
    publishedDate: string;
  };
  index: number;
};

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Card
      sx={{
        width: 400,
        maxWidth: 400,
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: 3,
        p: 2,
        m: 1,
        bgcolor: '#fff',
      }}
    >
      <CardMedia
    component="img"
    className="object-cover h-[200px]"
    image="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
    alt="Blog Cover Image"
  />
  
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {blog.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          {blog.shortNote}
        </Typography>

        <Typography variant="subtitle2" color="text.secondary">
          📅 Published on: {blog.publishedDate}
        </Typography>

        <Typography variant="subtitle2" color="text.secondary">
          ✍️ Author: {blog.author}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Link href={`/pages/ReadBlog/${blog.id}`}>
          <Button size="small" variant="contained" color="primary" >
            Read More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
