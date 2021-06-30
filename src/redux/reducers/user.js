import { STORE_USER } from "../actionTypes";
import { createReducer } from "@reduxjs/toolkit";


const initialState = {
    user: {}
}


const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(STORE_USER, (state, action) => {
            state.user = action.payload
        })
})

export default userReducer;