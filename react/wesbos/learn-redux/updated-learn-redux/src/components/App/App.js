import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import {  connect } from 'react-redux';

import * as actionCreators from '../../actions/actionCreators';

import PhotoGrid from '../PhotoGrid/PhotoGrid';
import Single from '../Single/Single';

function App() {
  return (
      <div>
        <h1>
          <Link to='/'>Reduxstagram</Link>
        </h1>
        <Switch>
          <Route path='/view/:postId' component={Single} />
          <Route exact path='/' component={PhotoGrid} />
        </Switch>
      </div>
  );
}

const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.comments
});

const mapDispatchToProps = dispatch => ({
  incrementLikes: (index) => dispatch(actionCreators.increment(index)),
  addComment: (postId, author, comment) => dispatch(actionCreators.addComment(postId, author, comment)),
  removeComment: (postId, index) => dispatch(actionCreators.removeComment(postId, index))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);