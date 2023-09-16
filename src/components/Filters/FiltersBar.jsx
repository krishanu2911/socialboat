import React from "react";
import { useVideoData } from "../../context/videoContext";

export const FiltersBar = () => {
  const { uniqueTagWithVideos, selectedFilters, setSelectedFilters } =
    useVideoData();
  const changeHandler = (tagName) => {
    if (selectedFilters[tagName]) {
      const { [tagName]: _, ...rest } = selectedFilters;
      setSelectedFilters(rest);
    } else {
      setSelectedFilters(
        Object.assign({ [tagName]: tagName }, selectedFilters)
      );
    }
  };
  return (
    <div className=" w-full flex justify-center items-center">
      <div className="">
        <form className=" flex gap-4 justify-center items-center">
          {uniqueTagWithVideos &&
            Object.keys(uniqueTagWithVideos).map((item) => {
              return (
                <div className="flex justify-center items-center">
                  <input
                    checked={selectedFilters[item]}
                    onChange={(e) => changeHandler(e.target.value)}
                    value={item}
                    type="checkbox"
                  />
                  <label>{item}</label>
                </div>
              );
            })}
        </form>
      </div>
    </div>
  );
};
