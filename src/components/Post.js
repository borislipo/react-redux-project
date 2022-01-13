import React from "react";
import '../styles/stylesheet.css'
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Post = ( props ) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {post, removePost} = props;
    const {imageLink, description, id} = post;

    return(
        <figure className="post">
            <Link to={`/Single/${id}`} ><img className="photo" src={imageLink} alt={description} /></Link>
            <figcaption><p>{description}</p></figcaption>
            <button onClick={() => {
             dispatch(removePost(id))
             navigate('/');

            }}>Remove</button>
        </figure>
    )
}

export default Post;