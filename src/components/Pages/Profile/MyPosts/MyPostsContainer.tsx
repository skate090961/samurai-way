import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../../store/reducers/profile-reducer/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootReducerType} from "../../../../store/reducers/rootReducer";
import {Action, Dispatch} from "redux";

const mapStateToProps = (state: RootReducerType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        addPost: () => {
            dispatch(addPostCreator())
        },
        updatePostText: (newText: string) => {
            dispatch(updateNewPostTextCreator(newText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;