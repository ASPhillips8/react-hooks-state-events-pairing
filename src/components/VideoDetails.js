import React from "react";

function VideoDetails({videoDetails}) {
  const {title, embedUrl, views, createdAt, upvotes, downvotes} = videoDetails

  return (
    <div className="video-detail">
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{title}</h1>
      <p>{views} Views | Uploaded {createdAt}</p>
      <button>{upvotes} "👍"</button>
      <button>{downvotes} "👎"</button>
    </div>
  );
}

export default VideoDetails;
