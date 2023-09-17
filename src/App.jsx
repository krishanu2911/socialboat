import "./App.css";
import { FiltersBar, Header, InitalQueryState, ServerBusy, VideoSection } from "./components";
import { useVideoData } from "./context/videoContext";

function App() {
  const { serverBusy, filteredVideos } = useVideoData();

  return (
    <div className="flex flex-col gap-6 w-full min-h-screen">
      <Header />
      {serverBusy ? (
        <ServerBusy />
      ) : filteredVideos?.length ? (
        <>
          <FiltersBar />
          <VideoSection />
        </>
      ) : (
        <InitalQueryState />
      )}
    </div>
  );
}

export default App;
