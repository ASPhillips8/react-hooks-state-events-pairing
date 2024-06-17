import React, {useState} from "react";
import Comment from "./Comment";

function CommentList({comments}) {
  const [updateComments, setUpdateComments] = useState(comments)

  function handleCommentDelete(id) {
    const updatedCommentList = updateComments.filter((comment) => comment.id !== id)
    setUpdateComments(updatedCommentList)

  }

  const displayedComments = updateComments.map((comment) => {
    return (
      <Comment
        key={comment.id}
        commentDetails={comment}
        onDelete={handleCommentDelete}
      />
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
