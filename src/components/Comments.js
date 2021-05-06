import React, { useState } from "react";
import Comment from "./Comment.js";
import * as actionCreators from "../redux/actionCreators.js";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const Comments = (props) => {
  const [input, handleChange] = useState();
  const [style, updateStyle] = useState({ display: "none" });
  const dispatch = useDispatch();
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;

  const save = () => {
    let comment = { username: props.user[0].name, comment: input, date: today };
    if (!input) {
      return null;
    } else {
      handleChange("");
      dispatch(actionCreators.SEND_COMMENT(comment, props.product.id));
    }
  };
  console.log(input);
  return (
    <div className="commentsBox">
      <div className="spread" onClick={() => updateStyle(style.display === "none" ? { display: "contents" } : { display: "none" })}>
        <h4>Comments for {props.product.productName}</h4>
        <i className="fa fa-angle-down" aria-hidden="true" style={{ fontSize: "1.7rem" }}></i>
      </div>

      <div style={style}>
        {props.user ? (
          <div className="inputSection">
            <textarea
              rows="2"
              className="commentInput"
              placeholder="Your comment..."
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            ></textarea>

            <button onClick={save}>
              Send <i className="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </div>
        ) : (
          <h4 id="signIn">
            Please <NavLink to="/signin">Sign in </NavLink>to comment.
          </h4>
        )}
        <div className="commentList">
          {" "}
          {props.product.productComments.map((i) => (
            <Comment key={Math.floor(Math.random() * 100)} comment={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
