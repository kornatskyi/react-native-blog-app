
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import rootReducer from './reducers/rootReducer'



export const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk,)
  )
  return store;
}

