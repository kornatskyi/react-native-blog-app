import * as actionTypes from './actionTypes'

//Amplify related
import { API, graphqlOperation } from "aws-amplify";
import { createPost } from "../graphql/mutations";

export function storePosts(payload) {
    return ({
        type: actionTypes.STORE_POSTS,
        payload: payload
    })
}
export function addPost(post) {
    return ({
        type: actionTypes.ADD_POST,
        payload: post
    })
}

export const postPost = (post) => (dispatch) => {
    return (
        async () => {
            try {
                await API.graphql(graphqlOperation(createPost, { input: post }))
                console.log('Post with title "', post.title, '" has been added to the db');
                dispatch(addPost(post));
                console.log('Post with title "', post.title, '" has been added to the redux store');
            } catch (err) {
                console.log(err);
                console.log('cant add new post');
            }
        }
    )()
}


export function deletePost(payload) {
    return ({
        type: actionTypes.DELETE_POST,
        payload: payload
    })
}