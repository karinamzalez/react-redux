/*jshint esversion: 6 */

import React from 'react';
// import stylesheet
import IdeaItem from './IdeaItem.js';
import { connect } from 'react-redux';

const IdeasList = (props) => {
  return (
    <ul>
      {
        props.ideas.length ?
        props.ideas.map((idea) => {
          return <IdeaItem idea={idea} />
        })
        : "blerp"
      }
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    ideas: state.ideas
  }
}

export default connect(
  mapStateToProps
)(IdeasList);
