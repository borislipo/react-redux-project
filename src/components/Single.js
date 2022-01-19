import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import Comments from "./Comments";
import * as actions from '../redux/actions';

const Single = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const posts = useSelector(state => state.postReducer);
    const comments = useSelector(state => state.commentReducer) || [];
    const post = posts.find(post => post.id === id) || [];
    const { startRemovePost, startLoadingComments } = actions;

    useEffect(() => {

        dispatch(startLoadingComments(id))

    }, [])

    return (

        <div className="single-photo">
            <Post post={post} id={id} removePost={startRemovePost} />
            <Comments comments={comments} id={id} />
        </div>
    )
}

export default Single;