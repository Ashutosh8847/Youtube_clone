import React from 'react'
import { Link } from 'react-router-dom'
import { abbreviateNumber } from 'js-abbreviation-number'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import VideoLength from "../shared/videoLength";


const VideoCard = ({ video }) => {
  console.log("****video*****", video)

  // const navigate = useNavigate();
  // const handleClick = () => {
  //   // Assuming video?.videoId exists
  //   navigate(`/video/${video?.videoId}`);
  //   console.log("******handle click******")
  // };
  // const videoId = video?.videoId;

  return (
    // <Link to={`https://www.youtube.com/watch?v=${videoId}`}>
        <Link to={`/video/${video?.videoId}`}> 
      <div className='flex flex-col mb-8'>
        <div className='relative h-48 md:h-40 md:rounded-xl overflow-hidden'>
          <img className="h-full w-full object-cover" src={video?.thumbnails[0]?.url} alt="thumbnail" />
          {video?.lengthSeconds && (
            <VideoLength time={video?.lengthSeconds} />
          )}
        </div>
        <div className='flex text-white mt-3'>
          <div className='flex items-start'>
            <div className='flex h-9 w-9 rounded-full overflow-hidden'>
              <img className="h-full w-full object-cover" src={video?.author?.avatar?.[0]?.url} alt="Avatarimg" />
            </div>
          </div>
          <div className='flex flex-col ml-3 overflow-hidden'>
            <span className='text-sm font-bold line-clamp-2'>
              {video?.title}
              

            </span>
            <span className='text-[12px] font-semibold mt-2 flex items-center text-white/[0.7]' >
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill  className='text-white/[0.5] text-[12px] ml-1'/>
              )}
            </span>
            <div className='flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden'>
              <span > {`${abbreviateNumber(video?.stats?.views,2)} views`} </span>
              <span className='flex text-[24px] leading-none font-bold text-white/[0.7] pl-1 relative top-[-10px] mx-1x'>.</span>
              <span className='truncate pl-1'>{video?.publishedTimeText ?video?.publishedTimeText : "Undefined" }</span>
            </div>
            
          </div>
          

        </div>
      </div>
    </Link>
  )
}

export default VideoCard
