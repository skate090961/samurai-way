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
}

const initialState = {
    users: []
}

type ActionsTypes = ReturnType<typeof changeFollowingStatusAC> | ReturnType<typeof setUsersAC>

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
                users: [...state.users, ...action.users]
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

