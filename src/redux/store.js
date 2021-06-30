import postsReducer from './reducers/posts'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore, combineReducers } from 'redux'



export const configureStore = () => {
  const store = createStore(
    combineReducers({
      posts: postsReducer
    }),
    applyMiddleware(thunk)
  )
  return store;
}

