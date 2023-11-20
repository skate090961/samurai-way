import {usersAPI, UserType} from "../../../api/users-api"
import {Dispatch} from "redux"
import {RootStateType} from "../rootReducer"

const initialState: UsersType = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false
}

type ActionsTypes = ReturnType<typeof changeFollowingStatusAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof toggleLoadingStatusAC>

export const usersReducer = (state: UsersType = initialState, action: ActionsTypes): UsersType => {
    switch (action.type) {
        case 'CHANGE-FOLLOWING-STATUS':
            return {
                ...state, users: state.users.map
                (u => u.id === action.userId ? {...u, followed: !u.followed} : u)
            }
        case 'SET-USERS':
            return {...state, users: [...action.users]}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.totalUsersCount}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'TOGGLE-LOADING-STATUS':
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

//types
export type UsersType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
}

//action
export const changeFollowingStatusAC = (userId: number) =>
    ({type: 'CHANGE-FOLLOWING-STATUS', userId} as const)
export const setUsersAC = (users: UserType[]) =>
    ({type: 'SET-USERS', users} as const)
export const setTotalUsersCountAC = (totalUsersCount: number) =>
    ({type: 'SET-TOTAL-USERS-COUNT', totalUsersCount} as const)
export const setCurrentPageAC = (currentPage: number) =>
    ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const toggleLoadingStatusAC = (isLoading: boolean) =>
    ({type: 'TOGGLE-LOADING-STATUS', isLoading} as const)

//thunk
export const setUsersTC = () => async (dispatch: Dispatch, getState: () => RootStateType) => {
    dispatch(toggleLoadingStatusAC(true))
    const state = getState()
    const {usersPage} = state
    try {
        const users = await usersAPI.getUsers(usersPage.pageSize, usersPage.currentPage)
        dispatch(setUsersAC(users.items))
        dispatch(setTotalUsersCountAC(users.totalCount))
    } finally {
        dispatch(toggleLoadingStatusAC(false))
    }
}