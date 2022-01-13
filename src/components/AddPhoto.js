import React, { useState } from 'react'
import * as actions from '../redux/actions';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const AddPhoto = () => {

    const [imageUrl, setImageUrl] = useState('');
    const [imgDescription, setImgDescription] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { addPost } = actions;


    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!imageUrl || !imgDescription){
            return alert('Please fill in all fields');
        }

        else{
            const newPost = {
                id: Date.now(),
                imageLink : imageUrl,
                description : imgDescription
            }

            dispatch(addPost(newPost));
            setImageUrl('');
            setImgDescription('');
            navigate('/');
        }
 
    }


    return (
        <div className="add-photo-container">
            <h1>Add an Image</h1>
            <div className='form-container'>
                <form onSubmit={(e) => handleSubmit(e) } >
                    <input  onChange={(e) => {
                        if (!e.target.value) { setImageUrl(''); }
                        if ((/[^0-9]/g).test(e.target.value)) { setImageUrl(e.target.value); }
                    }}
                    value={imageUrl}
                    placeholder="Image URL"
                    type="text" />
                    <input onChange={(e) => {
                        if (!e.target.value) { setImgDescription(''); }
                        if ((/[^0-9]/g).test(e.target.value)) { setImgDescription(e.target.value); }
                    }}
                    value={imgDescription}
                    type="text" placeholder="Image Description" />
                    <button type='submit'>Add Photo</button>
                </form>
            </div>
        </div>
    )
}

export default AddPhoto
