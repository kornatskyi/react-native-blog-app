import postsReducer from './reducers/posts'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { applyMiddleware, createStore, combineReducers } from 'redux'



export const configureStore = () => {
  const store = createStore(
    combineReducers({
      posts: postsReducer
    }),
    applyMiddleware(thunk, )
  )
  return store;
}

