import React, { useState } from "react";

export const SearchBar = () => {
  const [searchQuery, SetSearchQuery] = useState("");
  const changeHandler = () => {
    
  }
  return (
    <div className="shadow-md px-6 py-2 rounded-md md:w-[60%]">
      <input placeholder="search" className="w-full outline-[transparent]" />
    </div>
  );
};
