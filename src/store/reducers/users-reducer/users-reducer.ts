type LocationType = {
    country: string
    city: string
}
export type UserType = {
    id: string
    avatar: string
    fullName: string
    location: LocationType
    isFollow: boolean,
    status: string
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
                    u.id === action.userId ? {...u, isFollow: !u.isFollow} : u
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

export const changeFollowingStatusAC = (userId: string) => (
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

