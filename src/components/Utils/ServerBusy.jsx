import React from "react";

export const ServerBusy = () => {
  return (
    <div className=" w-full grid grid-cols-1 place-items-center text-red-500 font-semibold">
        <img className=' max-w-[10rem]' src='/serverBusy.svg' />
        <h1>Server Busy..</h1>
    </div>
  );
};
