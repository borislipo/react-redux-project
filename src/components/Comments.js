import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../redux/actions';

const Comments = (props) => {
    const { id, comments} = props;
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();
    const { startAddComment, removeComment } = actions;
    

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!comment) {
            return alert("Please enter a comment");
        }
        else {
            dispatch(startAddComment(comment, id ));
            setComment("");
        }
    }

    return (
        <div className="comment">
            <form className="comment-form" onSubmit={(e) => handleSubmit(e)}>
                <input onChange={(e) => {
                    if (!e.target.value) { setComment(''); }
                    if ((/[^0-9]/g).test(e.target.value)) { setComment(e.target.value); }
                }}
                    value={comment}
                    type="text" placeholder="Add a comment" />
                <button type="submit">Add Comment</button>
            </form>
            {
             comments.length > 0 ? comments.map(comment => <p key={comment}>{comment}<button onClick={() => dispatch(removeComment(comment, id)) }>x</button></p>) : null
            }
        </div>
    )
}

export default Comments;