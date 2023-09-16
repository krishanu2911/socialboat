import React from "react";
import { Tags } from "./tags";

export const VideoCard = () => {
  return (
    <div className="w-fit shadow flex flex-col gap-1 items-center rounded-xl">
      <iframe
        style={{}}
        className="rounded-t-xl"
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
      />
      <div className=" w-full p-2">
        <h1 className=" text-lg font-semibold text-left w-full mb-1">sets:siRlfh</h1>
        <div className=" flex gap-2 w-full">
          <Tags data={"hello"} />
          <Tags data={"hello"} />
          <Tags data={"hello"} />
        </div>
      </div>
    </div>
  );
};
