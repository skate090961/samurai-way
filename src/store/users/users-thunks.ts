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
import {setAppStatusAC} from "../app/app-reducer";
import {setIsFollowAC} from "../profile/profile-reducer";

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
    dispatch(setAppStatusAC('loading'))
    dispatch(toggleFollowingProgressAC(true, userId))
    const isUserFollow = await followAPI.getFollow(userId)
    try {
        let followStatus
        isUserFollow ? followStatus = await followAPI.unFollow(userId) : followStatus = await followAPI.follow(userId)
        if (followStatus.resultCode === 0) {
            dispatch(changeFollowingStatusAC(userId, !isUserFollow))
            dispatch(setAppStatusAC('succeeded'))
        } else {
            handleServerAppError(followStatus, dispatch)
        }
    } catch (e) {
        handleServerNetworkError((e as AxiosError), dispatch)
    } finally {
        dispatch(toggleFollowingProgressAC(false, userId))
    }
}

export const getIsFollowTC = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const isUserFollow = await followAPI.getFollow(userId)
        dispatch(setIsFollowAC(isUserFollow))
        dispatch(setAppStatusAC('succeeded'))
    } catch (e) {
        handleServerNetworkError((e as AxiosError), dispatch)
    }
}

export const toggleFollowTC = (userId: number) => async (dispatch: Dispatch, getState: () => RootStateType) => {
    dispatch(setAppStatusAC('loading'))
    const profile = getState().profilePage
    try {
        if (profile.isFollow) {
            await followAPI.unFollow(userId)
            dispatch(setIsFollowAC(false))
        } else {
            await followAPI.follow(userId)
            dispatch(setIsFollowAC(true))
        }
        dispatch(setAppStatusAC('succeeded'))
    } catch (e) {
        handleServerNetworkError((e as AxiosError), dispatch)
    }
}
