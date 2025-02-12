import{Stack,Box} from '@mui/material'
import {VideoCard, ChannelCard} from './'
// 
const Videos = ({videos,direction}) => {
  if(!videos?.length) return "Loading...";
  return (
<Stack direction={direction||"row"} flexWrap="wrap" justifyContent="start" gap={2} useFlexGap >
    {videos.map((item,idx)=>
         (item.id?.videoId || item.id?.channelId) && ( // Check if videoId or channelId exists
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        )
        // <Box key={idx} >
        //     {item.id.videoId && <VideoCard video={item}/>}
        //         {item.id.channelId && <ChannelCard channelDetail={item}/>}

        // </Box>
)}
</Stack>
  )
}

export default Videos