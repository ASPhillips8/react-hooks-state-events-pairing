import React, { useState } from "react";
import VideoDetails from "./VideoDetails";
import video from "../data/video";
import CommentList from "./CommentList";

function App() {
  const [showComments, setShowComments] = useState(true)

  function handleHideComments() {
    setShowComments(!showComments)
  }

  return (
    <div className="App">
      <VideoDetails videoDetails={video}/>
      <br></br>
      <button onClick={handleHideComments}>{showComments ? "Hide Comments" : "Show Comments"}</button>
      <hr />
      {showComments && <CommentList comments={video.comments}/>}
    </div>
  );
}

export default App;
