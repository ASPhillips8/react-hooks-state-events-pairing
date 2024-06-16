import React, {useState} from "react";

function Comment({commentDetails}) {
  const {id, user, comment} = commentDetails
  const [commentUpVotes, setCommentUpVotes] = useState(0)
  const [commentDownVotes, setCommentDownVotes] = useState(0)

  const handleCommentUpVotes = () => setCommentUpVotes(commentUpVotes + 1)
  const handleCommentDownVotes = () => setCommentDownVotes(commentDownVotes + 1)

  return (
    <div className="comment">
      <h3>{user}</h3>
      <p>{comment}</p>
      <button onClick={handleCommentUpVotes}>{commentUpVotes} 👍 </button>
      <button onClick={handleCommentDownVotes}>{commentDownVotes} 👎 </button>
    </div>
  );
}

export default Comment;
