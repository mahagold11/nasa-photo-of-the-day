// You will add code in this file

import React from "react";

import "./Posts.css";

export const Post = props => {
  // set up state for the likes

  return (
    <div className="post-border">
      <div className="post-header">
        <h1>{props.spacePic.title}</h1>
        <p>By {props.spacePic.copyright}</p>
      </div>
      <div className="post-image-wrapper">
        <img
          alt={props.spacePic.explanation}
          className="post-image"
          src={props.spacePic.url}
        />
      </div>
    <div className ="post-explanation">
      <p>{props.spacePic.explanation}</p>
    </div>
      

    </div>
  );
};

export default Post;
