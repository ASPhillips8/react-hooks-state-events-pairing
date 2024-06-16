import React, {useState} from "react";

function Comment({commentDetails}) {
  const {id, user, comment} = commentDetails


  console.log(commentDetails, "in comment")

  return (
    <div className="comment">
      <h3>{user}</h3>
      <p>{comment}</p>
    </div>
  );
}

export default Comment;
