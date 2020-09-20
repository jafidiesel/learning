import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import Photo from '../Photo/Photo';

function PhotoGrid(props) {
  return (
    <div className="photo-grid">
      {props.posts.map((post, i) => {
        return(
          <Photo {...props} key={i} i={i} post={post}/>
        )
      })}
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

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);