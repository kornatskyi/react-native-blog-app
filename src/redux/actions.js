import * as actionTypes from './actionTypes'

//Amplify related
import { API, graphqlOperation } from "aws-amplify";
import { createPost, deletePost, updatePost } from "../graphql/mutations";

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

export const postPost = (postData) => (dispatch) => {
    return (
        async () => {
            try {
                const post = await API.graphql(graphqlOperation(createPost, { input: postData }));
                dispatch(addPost(post.data.createPost));
            } catch (err) {
                console.log(err);
                console.log('cant add new post');
            }
        }
    )()
}


export function deletePostFromStore(id) {
    return ({
        type: actionTypes.DELETE_POST,
        payload: id
    })
}

export const deletePostSync = (id) => (dispatch) => {
    return (
        async () => {
            try {
                await API.graphql(graphqlOperation(deletePost, { input: { id: id } }))
                dispatch(deletePostFromStore(id));
            } catch (err) {
                console.error(err)
                console.log('cant delete post');
            }
        }
    )()
}

export function editPostInStore(editedPost) {
    return ({
        type: actionTypes.EDIT_POST,
        payload: editedPost
    })
}

export const editPostSync = (editedPost) => (dispatch) => {
    return (
        async () => {
            try {
                await API.graphql(graphqlOperation(updatePost, { input:  editedPost  }))
                dispatch(editPostInStore(editedPost));
            } catch (err) {
                console.error(err)
                console.log('cant delete post');
            }
        }
    )()
}


