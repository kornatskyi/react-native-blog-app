import * as actionTypes from './actionTypes'

//Amplify related
import { API, graphqlOperation, Auth } from "aws-amplify";
import { createPost, deletePost, updatePost, updateUser } from "../graphql/mutations";
import { listPosts, getUser } from '../graphql/queries';
import { createUser } from '../graphql/mutations';

/***  Actions  ***/

//User Actions
export function storeUser(user) {
    return ({
        type: actionTypes.STORE_USER,
        payload: user
    })
}

//Posts actions
export function storePosts(posts) {
    return ({
        type: actionTypes.STORE_POSTS,
        payload: posts
    })
}

export function addPost(post) {
    return ({
        type: actionTypes.ADD_POST,
        payload: post
    })
}
export function deletePostFromStore(id) {
    return ({
        type: actionTypes.DELETE_POST,
        payload: id
    })
}
export function editPostInStore(editedPost) {
    return ({
        type: actionTypes.EDIT_POST,
        payload: editedPost
    })
}

export function userLogOut() {
    return ({
        type: actionTypes.USER_LOGOUT
    })
}

//Middleware


//Posts Middleware
export const fetchPosts = (userId) => (dispatch) => {

    return (
        async () => {

            try {
                const posts = await API.graphql(graphqlOperation(listPosts, {
                    filter: {
                        userId:
                            { contains: userId }
                    }
                }))
                dispatch(storePosts(posts.data.listPosts.items))
            } catch (err) {
                // console.log(err);
                console.log('error when fetching posts');
            }
        }
    )()
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

export const deletePostSync = (id) => (dispatch) => {
    return (
        async () => {
            console.log("🚀 ~ id", id)
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

export const editPostSync = (editedPost) => (dispatch) => {
    return (
        async () => {
            try {
                const post = await API.graphql(graphqlOperation(updatePost, { input: editedPost }))
                dispatch(editPostInStore(post.data.updatePost));
            } catch (err) {
                console.log('cant edit post');
            }
        }
    )()
}



//User middleware
export const storeUserAsync = () => (dispatch) => {

    return (
        async () => {
            try {
                const userInfo = await Auth.currentAuthenticatedUser({
                    bypassCache: true,
                });



                if (userInfo) {
                    // Check if user already exists in database

                    const userData = await API.graphql(
                        graphqlOperation(getUser, { id: userInfo.signInUserSession.accessToken.payload.sub })
                    );





                    if (!userData.data.getUser) {
                        const user = {
                            id: userInfo.signInUserSession.accessToken.payload.sub,
                            name: userInfo.username,
                            email: userInfo.attributes.email,
                            image: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
                        };
                        await API.graphql(graphqlOperation(createUser, { input: user }))

                    } else {

                        console.log("User already exist!");
                    }


                    //Store user to the redux store
                    dispatch(storeUser(userData.data.getUser))
                }

            } catch (err) {
                console.log("🚀 ~ err", err)
                console.log('error when saving user');

            }
        }
    )()


}


export const updateUserName = (name) => (dispatch) => {

    return (
        async () => {
            try {
                const userInfo = await Auth.currentAuthenticatedUser({
                    bypassCache: true,
                });


                await API.graphql(graphqlOperation(updateUser, { input: { id: userInfo.signInUserSession.accessToken.payload.sub, name: name } }))
            } catch (err) {
                console.log("🚀 ~ err", err)
                console.log('error when updating user name');

            }
        }
    )()

}

export const updateEmail = (email) => (dispatch) => {
    console.log("🚀 ~ email", email)


    return (
        async () => {
            try {
                const userInfo = await Auth.currentAuthenticatedUser({
                    bypassCache: true,
                });

                await Auth.updateUserAttributes(userInfo, {
                    'email': email
                });


                await API.graphql(graphqlOperation(updateUser, {
                    input:
                    {
                        id: userInfo.signInUserSession.accessToken.payload.sub,
                        email: email
                    }
                }))



                // storeUserAsync()

            } catch (err) {
                console.log("🚀 ~ err", err)
                console.log('error when updating user email');

            }
        }
    )()

}

