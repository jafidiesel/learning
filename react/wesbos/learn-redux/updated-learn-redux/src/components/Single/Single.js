import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';

import Photo from '../Photo/Photo';
import Comments from '../Comments/Comments';

function Single(props) {
  // index of the post
  const postId = props.match.params.postId;
  const i = props.posts.findIndex( (post) => post.code === postId);
  const post = props.posts[i];
  const postComments = props.comments[postId] || [];

  return (
    <div className="single-photo">
      <Photo i={i} post={post} {...props} />
      <Comments postComments={postComments} {...props}/>
    </div>
    
  );
}


// here we conect to the store provided by Provider store={store}
const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.comments
});

const mapDispatchToProps = dispatch => ({
  increment: (index) => dispatch(actionCreators.increment(index)),
  addComment: (postId, author, comment) => dispatch(actionCreators.addComment(postId, author, comment)),
  removeComment: (postId, index) => dispatch(actionCreators.removeComment(postId, index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Single);