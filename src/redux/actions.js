import * as actionTypes from './actionTypes'

export function storePosts(payload) {
    return ({
        type: actionTypes.STORE_POSTS,
        payload: payload
    })
}
export function addPost(payload) {
    return ({
        type: actionTypes.ADD_POST,
        payload: payload
    })
}
export function deletePost(payload) {
    return ({
        type: actionTypes.DELETE_POST,
        payload: payload
    })
}