import React from "react";
import VideoDetails from "./VideoDetails.js";
import video from "../data/video.js";


function App() {

  return (
    <div className="App">
      <VideoDetails videoDetails={video}/>
    </div>
  );
}

export default App;
