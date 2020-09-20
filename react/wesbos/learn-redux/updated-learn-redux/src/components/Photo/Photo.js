import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

function Photo(props) {
    const { post, i, comments } = props;
    return (
        <figure className="grid-figure">
            <div className="grid-photo-wrap">
                <Link to={`/view/${post.code}`} >
                    <img src={post.display_src} alt={post.caption} className="grid-photo" />
                </Link>
                <CSSTransitionGroup transitionName="like"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                        <span key={post.likes} className="likes-heart">{post.likes}</span>
                    </CSSTransitionGroup>
            </div>
            <figcaption>
                <p>{post.caption}</p>
                <div className="control-buttons">
                    <button className="likes" onClick={props.increment.bind(null,i)} >
                        &hearts; {post.likes}
                    </button>
                    <Link to={`/view/${post.code}`} className="button">
                        <span className="speech-buble"></span>
                        {comments[post.code] ? comments[post.code].length : 0 }
                    </Link>
                </div>
            </figcaption>
        </figure>
    );
}

export default Photo;