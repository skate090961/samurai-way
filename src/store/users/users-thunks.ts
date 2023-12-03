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
import {handleServerNetworkError} from "../../utils/handle-errors/handleServerNetworkError";
import {AxiosError} from "axios";
import {handleServerAppError} from "../../utils/handle-errors/handleServerAppError";

export const setUsersTC = () => async (dispatch: Dispatch, getState: () => RootStateType) => {
    dispatch(toggleUserLoadingAC(true))
    const state = getState()
    try {
        const users = await usersAPI.getUsers(state.usersPage.pageSize, state.usersPage.currentPage)
        dispatch(setUsersAC(users.items))
        dispatch(setTotalUsersCountAC(users.totalCount))
    } catch (e) {
        handleServerNetworkError((e as AxiosError), dispatch)
    } finally {
        dispatch(toggleUserLoadingAC(false))
    }
}

export const changeFollowingStatusTC = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgressAC(true, userId))
    const isUserFollow = await followAPI.getFollow(userId)
    try {
        let followStatus
        isUserFollow ? followStatus = await followAPI.unFollow(userId) : followStatus = await followAPI.follow(userId)
        if (followStatus.resultCode === 0) {
            dispatch(changeFollowingStatusAC(userId, !isUserFollow))
            dispatch(toggleFollowingProgressAC(false, userId))
        } else {
            handleServerAppError(followStatus, dispatch)
        }
    } catch (e) {
        handleServerNetworkError((e as AxiosError), dispatch)
    }
}