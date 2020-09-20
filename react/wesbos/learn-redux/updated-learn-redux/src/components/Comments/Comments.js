import React from 'react';


function Comments(props) {
    let author = React.createRef();
    let comment = React.createRef();
    let commentForm = React.createRef();

    const renderComment = (comment, i) => {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment">&times;</button>
                </p>
            </div>
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {postId} = props.match.params;
        const localAuthor = author.current.value;
        const localComment = comment.current.value;
        console.log(localAuthor, localComment, postId);
        props.addComment(postId, localAuthor, localComment);
    }   

    return (
        <div className="comments">
            {props.postComments.map(renderComment)}
            <form ref={commentForm} className="comment-form" onSubmit={handleSubmit}>
                <input type="text" ref={author} placeholder="author"/>
                <input type="text" ref={comment} placeholder="comment"/>
                <input type="submit" hidden />
            </form>
        </div>

    );
}

export default Comments;