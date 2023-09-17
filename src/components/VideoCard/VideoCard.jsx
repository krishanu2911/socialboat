import React from "react";
import { Tags } from "./tags";

export const VideoCard = ({data}) => {
  return (
    <div className="w-full h-fit  flex flex-col gap-1 items-center rounded-xl">
      <iframe
        style={{}}
        className="rounded-t-xl w-full"
        src={`${data.video.replace(":","s:")}`}
      />
      <div className=" w-full p-2">
        <h1 className=" text-lg font-semibold text-left w-full mb-1">{data.heading}</h1>
        <div className=" flex gap-2 w-[100%] flex-wrap">
            {data.tags.map((item) =><div><Tags data={item} /></div>  )}
        </div>
      </div>
    </div>
  );
};
