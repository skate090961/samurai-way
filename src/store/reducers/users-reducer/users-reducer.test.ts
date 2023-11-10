import {changeFollowingStatusAC, setUsersAC, usersReducer, UsersType} from "./users-reducer";

const startState: UsersType = {
    users: [
        {
            id: 1,
            name: 'Max P.',
            photos: {
                small: null,
                large: null
            },
            followed: false,
            status: 'lorem ipsum lorem'
        },
        {
            id: 2,
            name: 'Michael F.',
            photos: {
                small: null,
                large: null
            },
            followed: true,
            status: 'Im a boss'
        },
        {
            id: 3,
            name: 'Viktor P.',
            photos: {
                small: null,
                large: null
            },
            followed: false,
            status: 'Life is like'
        },
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

test('user should be subscription status changed', () => {
    const endState = usersReducer(startState, changeFollowingStatusAC(1))

    expect(endState.users[0].followed).toBeTruthy()
    expect(endState.users[1].followed).toBeTruthy()
    expect(endState.users[2].followed).toBeFalsy()
})

test('users list should be update', () => {
    const users = [
        {
            id: 4,
            name: 'Max P.',
            photos: {
                small: null,
                large: null
            },
            followed: false,
            status: 'lorem ipsum lorem'
        },
        {
            id: 5,
            name: 'Michael F.',
            photos: {
                small: null,
                large: null
            },
            followed: true,
            status: 'Im a boss'
        },
        {
            id: 6,
            name: 'Viktor P.',
            photos: {
                small: null,
                large: null
            },
            followed: false,
            status: 'Life is like'
        },
    ]
    const endState = usersReducer(startState, setUsersAC(users))

    expect(endState.users.length).toBe(6)
    expect(endState.users[0].id).toBe(1)
    expect(endState.users[5].id).toBe(6)
})