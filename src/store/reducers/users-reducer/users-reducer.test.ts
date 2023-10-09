import {changeFollowingStatusAC, setUsersAC, usersReducer, UsersType} from "./users-reducer";

const startState: UsersType = {
    users: [
        {
            id: '1',
            fullName: 'Max P.',
            avatar: '...',
            location: {
                country: 'Russia',
                city: 'Moscow'
            },
            isFollow: false,
            status: 'lorem ipsum lorem'
        },
        {
            id: '2',
            fullName: 'Michael F.',
            avatar: '...',
            location: {
                country: 'USA',
                city: 'Nebraska'
            },
            isFollow: true,
            status: 'Im a boss'
        },
        {
            id: '3',
            fullName: 'Viktor P.',
            avatar: '...',
            location: {
                country: 'Russia',
                city: 'Saint-Petersburg'
            },
            isFollow: false,
            status: 'Life is like'
        },
    ]
}

test('user should be subscription status changed', () => {
    const endState = usersReducer(startState, changeFollowingStatusAC('1'))

    expect(endState.users[0].isFollow).toBeTruthy()
    expect(endState.users[1].isFollow).toBeTruthy()
    expect(endState.users[2].isFollow).toBeFalsy()
})

test('users list should be update', () => {
    const users = [
        {
            id: '4',
            fullName: 'Max P.',
            avatar: '...',
            location: {
                country: 'Russia',
                city: 'Moscow'
            },
            isFollow: false,
            status: 'lorem ipsum lorem'
        },
        {
            id: '5',
            fullName: 'Michael F.',
            avatar: '...',
            location: {
                country: 'USA',
                city: 'Nebraska'
            },
            isFollow: true,
            status: 'Im a boss'
        },
        {
            id: '6',
            fullName: 'Viktor P.',
            avatar: '...',
            location: {
                country: 'Russia',
                city: 'Saint-Petersburg'
            },
            isFollow: false,
            status: 'Life is like'
        },
    ]
    const endState = usersReducer(startState, setUsersAC(users))

    expect(endState.users.length).toBe(6)
    expect(endState.users[0].id).toBe(1)
    expect(endState.users[5].id).toBe(6)
})