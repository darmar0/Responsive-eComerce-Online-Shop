import React from "react";

const Comment = (props) => {
  return (
    <div className="commentSection">
      <div className="commentTop">
        <h4>{props.comment.username}</h4>
        <h5>{props.comment.date}</h5>
      </div>
      <p>{props.comment.comment}</p>
    </div>
  );
};

export default Comment;
