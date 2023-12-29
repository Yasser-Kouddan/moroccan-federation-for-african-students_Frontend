import React, { useState, useEffect } from 'react'
import intro_image from "../assets/intro_image1.png"
import PostCard from '../components/post_card/PostCard'
import Box from '@mui/material/Box';
import API from "../api/ApiInstance"

export default function PostScreen() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get('/posts');
        setData(response.data.posts);
        console.log(response.data.posts);
      } catch (error) {
        console.error("Error:", error);
        alert("Error occurred while fetching data. See console for details.");
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center"}}>
      {data.map((item) => (
        <PostCard
          key={item.post_id}  // Make sure to provide a unique key for each item
          title={item.title}
          subtitle={item.description}
        />
      ))}
    </Box>
  )
}