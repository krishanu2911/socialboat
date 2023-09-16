import React from "react";
import { VideoCard } from "../VideoCard/VideoCard";
import { useVideoData } from "../../context/videoContext";

export const VideoSection = () => {
  const { videosLoading, filterLoading, filteredVideos } = useVideoData();
  return (
    <div className="h-full flex-grow md:px-20 px-5 grid md:grid-cols-3 grid-cols-1 gap-4 pb-8"
    // className="h-full flex-grow md:px-10 px-5 flex flex-wrap justify-center items-center gap-4 pb-8"
    >
      {filterLoading ? (
        <div>loading</div>
      ) : (
        <>
        {filteredVideos?.map((item) => {
            return <div><VideoCard data={item} /></div> 
        })}
        </>
      )}
    </div>
  );
};
