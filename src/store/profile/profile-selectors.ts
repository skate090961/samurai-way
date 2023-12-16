import { RootStateType } from "../rootReducer"

export const selectPosts = (state: RootStateType) => state.profilePage.posts
export const selectProfile = (state: RootStateType) => state.profilePage.profile
export const selectProfileLoading = (state: RootStateType) => state.profilePage.isLoading
export const selectStatus = (state: RootStateType) => state.profilePage.status
export const selectIsFollow = (state: RootStateType) => state.profilePage.isFollow
