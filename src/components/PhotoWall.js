import React from "react";
import Post from "./Post";
import { Link } from "react-router-dom";
import '../styles/stylesheet.css'

const PhotoWall = (props) => {

    const { posts } = props;
    
    return (
        <div>
            <Link className='add-icon' to='/AddPhoto' />
            <div className="photo-wall-container">
                {posts.sort((x, y) => { return y.id - x.id }).map(post => <Post key={post.id} post={post} {...props} />)}
            </div>
        </div>
    )
}

export default PhotoWall;
