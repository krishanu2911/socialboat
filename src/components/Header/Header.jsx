import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";

export const Header = () => {
  return (
    <div className="flex justify-center items-center  md:px-10 px-5 pt-4 gap-4">
      <div className="flex justify-start">
        <img className="max-w-[4rem]" src="/run-logo-2.png" />
      </div>

      <div className="flex-grow flex justify-center items-center">
        <SearchBar />
      </div>
      <div className="flex justify-end items-center">
        <img className="max-w-[4rem] h-fit rounded-lg" src="/face2.svg" />
      </div>
    </div>
  );
};
