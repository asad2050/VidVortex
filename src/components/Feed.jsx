import {useState, useEffect} from 'react';
import{Box,Stack,Typography} from '@mui/material';
import {Sidebar,Videos} from './';
// Typography components used for all text elements instead of pre tags and headers.
//  sx =default, md = medium screen device
//  px = padding horizontal
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([])
  useEffect(()=>{
      fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>setVideos(data.items))
      
  },[selectedCategory])
  return (
  <Stack sx={{flexDirection:{
    sx:'column', md:"row"  
  }}}>
     <Box sx={{ height:{ sx:'auto', md:"92vh"}, borderRight:"1px solid #3d3d3d",
    px:{
      sx:0, md:2
    }}}>
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <Typography className="copyright" variant='body2' sx={{ 
      mt:1.5,
      color:"#555"
    }}>

      Copyright 2025 Asad Media
    </Typography>
    </Box>
    <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2 , }}>
      
      <Typography variant='h4' fontWeight='bod' mb ={2} sx={{color:'white'}}>
        {selectedCategory}  <span style={{color:'#F31503'}}>Videos</span>
      </Typography>
      <Box sx={{ml:{md:"24px"}}}>
      <Videos videos={videos}/>
      </Box>
    </Box>
  </Stack>
  )
}

export default Feed