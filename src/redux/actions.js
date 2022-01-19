import { db, collection, addDoc, getDocs, deleteDoc, doc, setDoc, getDoc } from "../config"

const startAddPost = (post) => {
  return dispatch => {
    return addDoc(collection(db, 'posts'), post).then(() => {
      dispatch(addPost(post));
    }).catch(err => {
      console.log(err);
    });
  }
}

const startAddComment = (comment, id) => {
  return dispatch => {
    return setDoc(doc(db, 'comments', id), { [Date.now()]: comment }, { merge: true }).then(() => {
      dispatch(addComment(comment, id));
    }).catch(err => {
      console.log(err);
    })
  }
}

const startLoadingComments = (id) => {
  return dispatch => {
    return getDoc(doc(db, 'comments', id)).then(snapshot => {
      let comments = [];
      let snapComments = snapshot.data();
      snapComments && Object.keys(snapComments).forEach(key => {
        comments.push(snapComments[key]);
      });
      console.log(comments);
      dispatch(loadComments(comments));
    }).catch(err => {
      console.log(err);
    });
  }
}

const startLoadingPosts = () => {
  return dispatch => {
    return getDocs(collection(db, 'posts')).then(snapshot => {
      let posts = [];
      snapshot.forEach(doc => {
        posts.push({ id: doc.id, ...doc.data() })
      });
      dispatch(loadPosts(posts))
    }).catch(err => {
      console.log(err);
    });
  }
}

const startRemovePost = (postId) => {
  return dispatch => {
    return deleteDoc(doc(db, 'posts', postId)).then(() => {
      dispatch(removePost(postId));
    }).catch(err => {
      console.log(err);
    });
  }
}

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
    successMessage: 'Post added successfully'
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
    id: id
  }
}

const loadPosts = (posts) => {
  return {
    type: 'LOAD_POSTS',
    posts
  }
}

const loadComments = (comments) => {
  return {
    type: 'LOAD_COMMENTS',
    comments
  }
}

export { removePost, addPost, addComment, removeComment, startAddPost, startLoadingPosts, startRemovePost, startAddComment, startLoadingComments, loadComments, loadPosts};