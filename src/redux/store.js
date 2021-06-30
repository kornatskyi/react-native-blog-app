import postsReducer from './reducers/posts'
import userReducer from './reducers/user'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { applyMiddleware, createStore, combineReducers } from 'redux'



export const configureStore = () => {
  const store = createStore(
    combineReducers({
      posts: postsReducer,
      user: userReducer
    }),
    applyMiddleware(thunk,)
  )
  return store;
}

