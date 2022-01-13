import posts from '../data/posts'
import { combineReducers } from 'redux'



const commentReducer = (state = {} , action) => {
    
        switch (action.type) {
            case "REMOVE_COMMENT": return {...state, [action.id]: state[action.id].filter(comment => comment !== action.comment)}
            case "ADD_COMMENT": 
             if(!state[action.id]){
                return {...state, [action.id]: [action.comment]}
            }
            else{
               return {...state, [action.id] : [...state[action.id], action.comment]} 
            } 
            default: return state
    
        }
    
}

const postReducer = (state = posts, action) => {

    switch (action.type) {
        case "REMOVE_POST": return [...state.filter(post => post.id !== action.id)]
        case "ADD_POST": return [...state, action.post]
        default: return state

    }

}

const rootReducer = combineReducers({commentReducer, postReducer})



export default rootReducer;