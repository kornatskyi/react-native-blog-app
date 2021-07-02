import { USER_LOGOUT } from "../actionTypes"
import { combineReducers } from "redux" 
import postsReducer from './posts'
import userReducer from './user'

const appReducer = combineReducers({
    posts: postsReducer,
    user: userReducer
})

const rootReducer = (state, action) => {
    if (action.type === USER_LOGOUT) {
        return appReducer(undefined, action)
    }
    return appReducer(state, action)
}

export default rootReducer;