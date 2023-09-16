import React, { useEffect, useState } from "react";
import axios from "axios";
import { useVideoData } from "../../context/videoContext";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    setApiData,
    getfilteredtags,
    serverBusy,
    setServarBusy,
    setSelectedFilters,
  } = useVideoData();
  const fetchVideoData = async (query) => {
    try {
      const res = await axios.get(
        `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${query}&numResults=10`
      );
      setApiData(res.data);
      getfilteredtags(res.data);
      setServarBusy(false);
      setSelectedFilters({});
    } catch (e) {
      setServarBusy(true);
      setApiData(null);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery !== "") fetchVideoData(searchQuery);
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
