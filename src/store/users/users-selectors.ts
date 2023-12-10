import { RootStateType } from "../rootReducer"

export const selectUsers = (state: RootStateType) => state.usersPage.users
export const selectTotalUsersCount = (state: RootStateType) => state.usersPage.totalUsersCount
export const selectUsersPageSize = (state: RootStateType) => state.usersPage.pageSize
export const selectUsersLoading = (state: RootStateType) => state.usersPage.isLoading
export const selectFollowingInProgress = (state: RootStateType) => state.usersPage.followingInProgress
export const selectUsersCurrentPage = (state: RootStateType) => state.usersPage.currentPage
