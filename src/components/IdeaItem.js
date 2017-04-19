/*jshint esversion: 6 */

import React from 'react';
// import stylesheet

const IdeaItem = (props) => {
  return (
    <li id={props.idea.id} >
      <h1>{props.idea.title}</h1>
      <p>{props.idea.body}</p>
      <p>{props.idea.quality}</p>
    </li>
  );
};

export default IdeaItem;
