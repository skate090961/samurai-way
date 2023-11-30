import {Dispatch} from "redux";
import {RootStateType} from "../rootReducer";
import {usersAPI} from "../../api/users-api";
import {followAPI} from "../../api/follow-api";
import {
    changeFollowingStatusAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleFollowingProgressAC,
    toggleUserLoadingAC
} from "./users-reducer";

export const setUsersTC = () => async (dispatch: Dispatch, getState: () => RootStateType) => {
    dispatch(toggleUserLoadingAC(true))
    const state = getState()
    try {
        const users = await usersAPI.getUsers(state.usersPage.pageSize, state.usersPage.currentPage)
        dispatch(setUsersAC(users.items))
        dispatch(setTotalUsersCountAC(users.totalCount))
    } finally {
        dispatch(toggleUserLoadingAC(false))
    }
}

export const changeFollowingStatusTC = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgressAC(true, userId))
    const isUserFollow = await followAPI.getFollow(userId)
    let followStatus
    isUserFollow ? followStatus = await followAPI.unFollow(userId) : followStatus = await followAPI.follow(userId)
    followStatus.resultCode === 0 && dispatch(changeFollowingStatusAC(userId, !isUserFollow))
    dispatch(toggleFollowingProgressAC(false, userId))
}