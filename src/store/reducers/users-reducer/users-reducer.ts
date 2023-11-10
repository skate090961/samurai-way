type LocationType = {
    country: string
    city: string
}
type PhotosType = {
    small: string | null
    large: string | null
}
export type UserType = {
    id: number
    photos: PhotosType
    name: string
    // location: LocationType
    followed: boolean,
    status: string | null
}
export type UsersType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const initialState: UsersType = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 2
}

type ActionsTypes = ReturnType<typeof changeFollowingStatusAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof setTotalUsersCountAC> |
    ReturnType<typeof setCurrentPageAC>

export const usersReducer = (state: UsersType = initialState, action: ActionsTypes): UsersType => {
    switch (action.type) {
        case 'CHANGE-FOLLOWING-STATUS':
            return {
                ...state,
                users: state.users.map(u =>
                    u.id === action.userId ? {...u, followed: !u.followed} : u
                )
            }
        case 'SET-USERS':
            return {
                ...state,
                users: [...action.users]
            }
        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        default:
            return state
    }
}

export const changeFollowingStatusAC = (userId: number) => (
    {
        type: 'CHANGE-FOLLOWING-STATUS',
        userId
    } as const
)
export const setUsersAC = (users: UserType[]) => (
    {
        type: 'SET-USERS',
        users
    } as const
)
export const setTotalUsersCountAC = (totalUsersCount: number) => (
    {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount
    } as const
)
export const setCurrentPageAC = (currentPage: number) => (
    {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
)
