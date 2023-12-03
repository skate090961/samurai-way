import {RootStateType} from "../rootReducer";

export const selectPosts = (state: RootStateType) => state.profilePage.posts
export const selectProfile = (state: RootStateType) => state.profilePage.profile
export const selectNewPostText = (state: RootStateType) => state.profilePage.newPostText
export const selectProfileLoading = (state: RootStateType) => state.profilePage.isLoading
export const selectStatus = (state: RootStateType) => state.profilePage.status