import { createContext, useContext, useEffect, useState } from "react";

const VideoDataContext = createContext();

export const VideoDataContextProvider = ({ children }) => {
  const [apiData, setApiData] = useState(null);
  const [uniqueTagWithVideos, setUniqueTagWithVideos] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({});
  const [videosLoading, setVideoLoading] = useState(false);
  const [filterLoading, setFilterLoading] = useState(false);
  const [serverBusy, setServarBusy] = useState(false);
  const getFilteredVideos = () => {
    // setVideoLoading(true);
    if (Object.keys(selectedFilters).length !== 0) {
      const updatedVideoData = {};

      for (let tag in selectedFilters) {
        const videosOfTags = uniqueTagWithVideos[tag];
        for (let i = 0; i < videosOfTags?.length; i++) {
          if (!updatedVideoData[videosOfTags[i]?.heading]) {
            updatedVideoData[videosOfTags[i]?.heading] = videosOfTags[i];
          }
        }
      }
      return Object.values(updatedVideoData);
    }
    // setVideoLoading(false);
    return apiData?.results;
  };

  // here below after fetching the apidata filtering out the unique filters

  const getfilteredtags = (data) => {
    setFilterLoading(true);
    const tagsWithVideos = uniqueTagWithVideos;
    for (let videodata of data?.results) {
      for (let tag of videodata?.tags) {
        if (!tagsWithVideos[tag]) {
          tagsWithVideos[tag] = [];
        }
        tagsWithVideos[tag].push(videodata);
        setUniqueTagWithVideos(tagsWithVideos);
      }
    }
    setFilterLoading(false);
  };
  const filteredVideos = getFilteredVideos();
  return (
    <VideoDataContext.Provider
      value={{
        apiData,
        setApiData,
        filterLoading,
        videosLoading,
        filteredVideos,
        uniqueTagWithVideos,
        getfilteredtags,
        setSelectedFilters,
        selectedFilters,
        serverBusy,
        setServarBusy,
      }}
    >
      {children}
    </VideoDataContext.Provider>
  );
};
export const useVideoData = () => useContext(VideoDataContext);
