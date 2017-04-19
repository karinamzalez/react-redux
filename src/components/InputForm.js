/*jshint esversion: 6 */

import React from 'react';
// import stylesheet
import { updateTitleInput, updateBodyInput, addIdea } from '../actions/index.js';
import { connect } from 'react-redux';

const inputForm = (props) => {
  return (
    <form>
      <div>
        <label htmlFor="idea-title">Title</label>
        <input type="text" id="idea-title" onKeyUp={(e) => props.updateTitleInput(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="idea-body">Body</label>
        <input type="text" id="idea-body" onKeyUp={(e) => props.updateBodyInput(e.target.value)}/>
      </div>
      <button type="submit" className="submit-btn" onClick={(e) => props.addIdea(props.titleString, props.bodyString, e)} >Create Idea</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    titleString: state.inputs.titleString,
    bodyString: state.inputs.bodyString
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateTitleInput: (titleString) => {
      console.log('fired');
      dispatch(updateTitleInput(titleString))
    },
    updateBodyInput: (bodyString) => {
      dispatch(updateBodyInput(bodyString))
    },
    addIdea: (titleString, bodyString, e) => {
      e.preventDefault()
      const ideaObject = {
        title: titleString,
        body: bodyString,
        quality: 'swill',
        id: Date.now()
      }
      dispatch(addIdea(ideaObject))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(inputForm);
