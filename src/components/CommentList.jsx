import React, {useState} from "react";
import Comment from "./Comment";

function CommentList({comments}) {

  const displayedComments = comments.map((comment) => {
    return (
      <Comment key={comment.id} commentDetails={comment}/>
    )
  })

  return (
    <div className="comment-list">
      <h2>{comments.length} Comments</h2>
      {displayedComments}
    </div>
  );
}

export default CommentList;
