import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Box} from '@mui/material';
import {Navbar,Feed, VideoDetail,ChannelDetail,SearchFeed } from './components'; // make index.js in components folder and export each component there
// select name and ctrl+space to get component imported

// rafce
const App = () =>  (
    <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}>
      <Navbar/>
    <Routes>
      <Route path="/" exact element={<Feed/>}/>
      <Route path="/video/:id" element={<VideoDetail/>}/>
      <Route path="/channel/:id" element={<ChannelDetail/>}/>
      <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
    </Routes>

    </Box>
    </BrowserRouter>
  )   


export default App 