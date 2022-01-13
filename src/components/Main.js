import React, { useReducer, useState } from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import '../styles/stylesheet.css'
import { useSelector } from "react-redux";
import * as actions from '../redux/actions';

const Main = () => {
    const posts = useSelector(state => state.postReducer);
    
    return (

        <div className="main-container">
            <Title />
            {<PhotoWall posts={posts} {...actions} />}
        </div>

    )
}

export default Main