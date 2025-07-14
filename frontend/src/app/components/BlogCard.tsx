import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Link from "next/link";



type BlogCardProps = {
  postData: {
    id: number;
    author: string;
    title: string;
    content: string;
    image: string;
    publishedDate: string;
  };
  index: number;
};


export default function BlogCard({ postData, index } : BlogCardProps) {
  return (
    <Card sx={{ maxWidth: 450, height: 400, width: 400 }} className='flex flex-col justify-between'>
      <CardActionArea>
        <CardMedia
          component="img"
        //   height="80"
          className="object-cover h-[200px]"
          image="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Blog Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {postData.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {postData.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={`/pages/ReadBlog/${index}`}>
        <Button size="small" color="primary">
          Read More
        </Button></Link>
      </CardActions>
    </Card>
    );
}
