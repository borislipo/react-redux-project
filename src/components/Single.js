import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Post from "./Post";
import Comments from "./Comments";
import * as actions from '../redux/actions';

const Single = () =>{

    const { id } = useParams();
    const posts = useSelector(state => state.postReducer);
    const comments = useSelector(state => state.commentReducer)[id] || [];
    const post = posts.find(post => post.id === parseInt(id));
    const {removePost} = actions;
    console.log(comments)

    return(
        
        <div className="single-photo">
            <Post post={post} id={id} removePost={removePost}/>
            <Comments comments={comments} id={id} />
        </div>
    )
}

export default Single;