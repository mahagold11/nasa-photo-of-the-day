// You will add code in this file

import React from "react";

import "./Posts.css";
import styled from 'styled-components'


const SpaceCard = styled.div`
height: 50%;
width: 33%;
min-width: 400px;
margin: 5px auto;
padding: 20px;
background: #e0ffff;
display: flex;
flex-direction: column;
align-items: center; 
`;

const SpaceCardHeader = styled.div`
display: flex;
align-items: center;
`;

// const CardTitle = styled.h1`
// display: flex;
// align-items: center;
// `;


export const Post = props => {
  // set up state for the likes

  return (
    <SpaceCard>
      <SpaceCardHeader>
        <h1>{props.spacePic.title}</h1>
        <p>By {props.spacePic.copyright}</p>
      </SpaceCardHeader>
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
    </SpaceCard>
  );
};

export default Post;
