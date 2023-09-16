import React, { useEffect, useState } from "react";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const fetchVideoData = (query) => {
    console.log("calling api", query);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchVideoData(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className="shadow-md px-6 py-2 rounded-md md:w-[60%]">
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="search"
        className="w-full outline-[transparent]"
      />
    </div>
  );
};
