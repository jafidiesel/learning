// increment
export function increment(index){
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}
// add comment
export function addComent(postId, author, comment){
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}
// remove comment
export function removeComent(postId, i){
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId
    }
}