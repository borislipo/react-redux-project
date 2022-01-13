const removePost = (postId) => {
  return {
    type: 'REMOVE_POST',
    id: postId
  }
}

const addPost = (post) => {
  return {
    type: 'ADD_POST',
    post: post,
    successMessage : 'Post added successfully'
  }
}

const addComment = (comment, id) => {
    return {
        type: 'ADD_COMMENT',
        comment: comment, 
        id: id
    }
}

const removeComment = (comment, id) => {
    return {
        type: 'REMOVE_COMMENT',
        comment: comment,
        id : id
    }
}

export { removePost, addPost, addComment, removeComment };