import React from "react";
import Post from "./Post";
import * as actions from '../redux/actions';
import { Link } from "react-router-dom";
import '../styles/stylesheet.css'

const PhotoWall = (props) => {
    const { startRemovePost } = actions;
    const { posts } = props;
    
    return (
        <div>
            <Link className='add-icon' to='/AddPhoto' />
            <div className="photo-wall-container">
                {posts.length > 0 ? posts.sort((x, y) => { return y.id - x.id }).map(post => <Post key={post.id} post={post} {...props} removePost={startRemovePost} />) : <h1>Loading</h1>}
            </div>
        </div>
    )
}

export default PhotoWall;
