import React from 'react'
import { VideoCard } from '../VideoCard/VideoCard'

export const VideoSection = () => {
  return (
    <div className='h-full flex-grow md:px-10 px-5 flex flex-wrap justify-center items-center gap-4 pb-8'>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
    </div>
  )
}
