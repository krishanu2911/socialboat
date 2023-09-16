import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { VideoDataContextProvider } from "./context/videoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VideoDataContextProvider>
      <App />
    </VideoDataContextProvider>
  </React.StrictMode>
);
