import React from "react";
import '../styles/stylesheet.css'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Post = ( props ) => {
    const {post, removePost} = props;
    const {imageLink, description, id} = post;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const numberOfComments = useSelector(state => state.commentReducer[id] || []).length;
    

    return(
        <figure className="post">
            <Link to={`/Single/${id}`} ><img className="photo" src={imageLink} alt={description} /></Link>
            <figcaption><p>{description}</p></figcaption>
            <button onClick={() => {
             dispatch(removePost(id))
             navigate('/');

            }}>Remove</button>
            <Link to={`/Single/${id}`} ><button>{numberOfComments > 0 ? numberOfComments : null}Comments</button></Link>
        </figure>
    )
}

export default Post;