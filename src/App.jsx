import "./App.css";
import { FiltersBar, Header, VideoSection } from "./components";
import { useVideoData } from "./context/videoContext";

function App() {
  const { serverBusy, filteredVideos } = useVideoData();

  return (
    <div className="flex flex-col gap-6 w-full min-h-screen">
      <Header />
      {serverBusy ? (
        <div className=" w-full flex justify-center items-center text-xl text-red-500 font-semibold">
          Server Busy
        </div>
      ) : filteredVideos?.length ? (
        <>
          <FiltersBar />
          <VideoSection />
        </>
      ) : (
        <div>Start Searching</div>
      )}
    </div>
  );
}

export default App;
