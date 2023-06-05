import React, {useEffect} from 'react'
import book from '../assets/book-removebg-preview.png'
import { Box, Typography } from '@mui/material'

const Home = () => {
  useEffect(() => {
    document.title = "Book Store | Home"
 }, []);

  return (
    <Box sx={{display:'flex',width:'100%',height:'100%',backgroundColor:'red'}}>
      <Typography variant='h2'>
        Welcome to Book Store
      </Typography>

    </Box>
  )
}

export default Home