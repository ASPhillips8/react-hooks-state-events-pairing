import React, {useState} from "react";
import VideoDetails from "./VideoDetails.js";
import video from "../data/video.js";
import CommentList from "./CommentList.jsx";

function App() {
  const [hideComments, setHideComments] = useState(true)

  console.log("app:", hideComments)

  function handleHideComments() {
    setHideComments(!hideComments)
  }



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
