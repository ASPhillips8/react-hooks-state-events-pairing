import React, {useState} from "react";
import VideoDetails from "./VideoDetails.js";
import video from "../data/video.js";
import CommentList from "./CommentList.jsx";

function App() {
  const [hideComments, setHideComments] = useState(true)

  function handleHideComments() {
    setHideComments(!hideComments)
  }
  console.log(video)
  return (
    <div className="App">
      <VideoDetails videoDetails={video}/>
      <br></br>
      <button onClick={handleHideComments}>{hideComments ? "Hide Comments" : "Show Comments"}</button>
      <hr />
      {hideComments && <CommentList comments={video.comments}/>}
    </div>
  );
}

export default App;
