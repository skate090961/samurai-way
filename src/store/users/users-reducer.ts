import { UserType } from "../../api/users-api"

const initialState: UsersType = {
  users: [],
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: false,
  followingInProgress: [],
}

export const usersReducer = (state: UsersType = initialState, action: ActionsTypes): UsersType => {
  switch (action.type) {
    case "CHANGE-FOLLOWING-STATUS":
      return {
        ...state,
        users: state.users.map((u) => (u.id === action.userId ? { ...u, followed: action.isFollow } : u)),
      }
    case "SET-USERS":
      return { ...state, users: [...action.users] }
    case "SET-TOTAL-USERS-COUNT":
      return { ...state, totalUsersCount: action.totalUsersCount }
    case "SET-CURRENT-PAGE":
      return { ...state, currentPage: action.currentPage }
    case "TOGGLE-USER-LOADING":
      return { ...state, isLoading: action.isLoading }
    case "TOGGLE-IS-FOLLOWING-PROGRESS":
      return {
        ...state,
        followingInProgress: action.isFollowingProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      }
    default:
      return state
  }
}

//types
type ActionsTypes =
  | ReturnType<typeof changeFollowingStatusAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setTotalUsersCountAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof toggleUserLoadingAC>
  | ReturnType<typeof toggleFollowingProgressAC>

export type UsersType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isLoading: boolean
  followingInProgress: number[]
}

//action
export const changeFollowingStatusAC = (userId: number, isFollow: boolean) =>
  ({ type: "CHANGE-FOLLOWING-STATUS", userId, isFollow }) as const
export const setUsersAC = (users: UserType[]) => ({ type: "SET-USERS", users }) as const
export const setTotalUsersCountAC = (totalUsersCount: number) =>
  ({ type: "SET-TOTAL-USERS-COUNT", totalUsersCount }) as const
export const setCurrentPageAC = (currentPage: number) => ({ type: "SET-CURRENT-PAGE", currentPage }) as const
export const toggleUserLoadingAC = (isLoading: boolean) => ({ type: "TOGGLE-USER-LOADING", isLoading }) as const
export const toggleFollowingProgressAC = (isFollowingProgress: boolean, userId: number) =>
  ({ type: "TOGGLE-IS-FOLLOWING-PROGRESS", isFollowingProgress, userId }) as const
