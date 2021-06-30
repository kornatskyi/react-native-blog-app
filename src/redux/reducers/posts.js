import { STORE_POSTS, ADD_POST, DELETE_POST } from "../actionTypes";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    posts: null
};

//using createReducer to simplify code. it makes possible to write mutable code
const postsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(STORE_POSTS, (state, action) => {
            state.posts = action.payload;
        })
        .addCase(ADD_POST, (state, action) => {
            state.posts.push(action.payload)
        })
        .addCase(DELETE_POST, (state, action) => {
            state.posts = state.posts.filter(post => {
                return post.id !== action.payload
            })
        })
})

export default postsReducer;