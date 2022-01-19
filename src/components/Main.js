import React, {useState, useEffect } from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import '../styles/stylesheet.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as actions from '../redux/actions';

const Main = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.postReducer);
    const { startLoadingPosts } = actions
    

    useEffect(() => {

        dispatch(startLoadingPosts());

    }, []);


    
    return (

        <div className="main-container">
            <Title />
            {<PhotoWall posts={posts} {...actions} />}
        </div>
    )
}

export default Main