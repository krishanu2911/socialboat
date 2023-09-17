import React, { useEffect, useState } from "react";
import axios from "axios";
import { useVideoData } from "../../context/videoContext";
import { Spinner } from "../Loader/spinner";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    setApiData,
    getfilteredtags,
    setServarBusy,
    setSelectedFilters,
    setVideoLoading,
    videosLoading,
  } = useVideoData();
  const fetchVideoData = async (query) => {
    setVideoLoading(true);
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
    } finally {
      setVideoLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery !== "") fetchVideoData(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className="shadow-md px-6 py-2 flex rounded-md md:w-[60%]">
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="search"
        className="w-full outline-[transparent] focus:outline-[transparent]"
      />
      {videosLoading ? <Spinner /> : null}
    </div>
  );
};
