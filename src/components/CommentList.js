import React, {useState} from "react";
import Comment from "./Comment";
import SearchBar from "./SearchBar";

function CommentList({comments}) {
  const [toUpDateComments, setToUpdateComments] = useState(comments)
  const [userSearch, setUserSearch] = useState("")

  function handleCommentDelete(id) {
    const updatedCommentList = toUpDateComments.filter((comment) => comment.id !== id)
    setToUpdateComments(updatedCommentList)
  }

  const filteredComments = toUpDateComments.filter((comment) => {
    return comment.user.toLowerCase().includes(userSearch.toLowerCase())
  })

  const displayedComments = filteredComments.map((comment) => {
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
      <div>
        <h2>{comments.length} Comments</h2>
        <SearchBar userSearch={userSearch} setUserSearch={setUserSearch}/>
      </div>
      <div>
        {displayedComments}
      </div>
    </div>
  );
}

export default CommentList;
