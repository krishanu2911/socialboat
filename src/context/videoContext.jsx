import { createContext, useContext, useEffect, useState } from "react";

const VideoDataContext = createContext();

export const VideoDataContextProvider = ({ children }) => {
  const [apiData, setApiData] = useState(null);
  const [uniqueTagWithVideos, setUniqueTagWithVideos] = useState({});
  const [filterLoading, setFilterLoading] = useState(false);


  // here below after fetching the apidata filtering out the unique filters

  useEffect(() => {
    if (apiData && apiData?.results) {
      setFilterLoading(true);
      const tagsWithVideos = uniqueTagWithVideos;
      for (let videodata of apiData.results) {
        for (let tag of videodata?.tags) {
          if (!tagsWithVideos[tag]) {
            tagsWithVideos[tag] = [];
          }
          tagsWithVideos[tag].push(videodata);
          setUniqueTagWithVideos(tagsWithVideos);
        }
      }
      setFilterLoading(false);
    }
  }, [apiData]);

  console.log(uniqueTagWithVideos);
  return (
    <VideoDataContext.Provider value={{ apiData, setApiData }}>
      {children}
    </VideoDataContext.Provider>
  );
};
export const useVideoData = () => useContext(VideoDataContext);
