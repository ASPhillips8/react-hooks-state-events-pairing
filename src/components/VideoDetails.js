import React, {useState} from "react";

function VideoDetails({videoDetails}) {
  const {title, embedUrl, views, createdAt, upvotes, downvotes} = videoDetails
  const [upVotes, setUpVotes] = useState(upvotes)
  const [downVotes, setDownVotes] = useState(downvotes)

  const handleUpVotes = () => setUpVotes(upVotes + 1)
  const handleDownVotes = () => setDownVotes(downVotes + 1)

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
      <button onClick={handleUpVotes}>{upVotes} "👍"</button>
      <button onClick={handleDownVotes}>{downVotes} "👎"</button>
    </div>
  );
}

export default VideoDetails;
