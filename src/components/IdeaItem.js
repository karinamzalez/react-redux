/*jshint esversion: 6 */

import React from 'react';
import { removeIdea } from '../actions/index.js';
import { connect } from 'react-redux';
// import stylesheet

const IdeaItem = (props) => {
  return (
    <li id={props.idea.id} >
      <h1>{props.idea.title}</h1>
      <p>{props.idea.body}</p>
      <p>{props.idea.quality}</p>
      <button className="delete-btn" onClick={(e) => props.removeIdea(props.idea.id, e)}>Remove Idea</button>
    </li>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addIdea: (id, e) => {
      e.preventDefault()
      const id = id
    }
    dispatch(removeIdea(id))
  }
}

export default connect(
  mapDispatchToProps
)(IdeaItem);
