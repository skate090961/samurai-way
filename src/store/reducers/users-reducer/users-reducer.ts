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
    users: [
        {
            id: '1',
            fullName: 'Max P.',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairShavedSides&accessoriesType=Round&facialHairType=BeardMedium&facialHairColor=Auburn&clotheType=BlazerShirt&eyeType=Wink&eyebrowType=Default&mouthType=Disbelief&skinColor=Yellow',
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
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Blank&hairColor=PastelPink&facialHairType=MoustacheMagnum&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Pink&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Vomit&skinColor=Brown',
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
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Round&hairColor=BlondeGolden&facialHairType=BeardMedium&facialHairColor=BlondeGolden&clotheType=ShirtScoopNeck&clotheColor=White&eyeType=Squint&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Brown',
            location: {
                country: 'Russia',
                city: 'Saint-Petersburg'
            },
            isFollow: true,
            status: 'Life is like'
        },
        {
            id: '4',
            fullName: 'Morgen A.',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Wayfarers&hatColor=PastelYellow&hairColor=Black&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=ShirtScoopNeck&clotheColor=PastelOrange&eyeType=Hearts&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light',
            location: {
                country: 'Germany',
                city: 'Berlin'
            },
            isFollow: false,
            status: 'I like beer'
        },
        {
            id: '5',
            fullName: 'Jack R.',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Blank&hairColor=Auburn&facialHairType=BeardMedium&facialHairColor=Auburn&clotheType=ShirtCrewNeck&clotheColor=Red&eyeType=EyeRoll&eyebrowType=UnibrowNatural&mouthType=ScreamOpen&skinColor=DarkBrown',
            location: {
                country: 'Canada',
                city: 'Vancouver'
            },
            isFollow: true,
            status: 'I like hockey'
        },
        {
            id: '6',
            fullName: 'Misha W.',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Prescription01&hairColor=Blue&facialHairType=MoustacheMagnum&facialHairColor=Red&clotheType=ShirtCrewNeck&clotheColor=PastelRed&eyeType=Hearts&eyebrowType=FlatNatural&mouthType=ScreamOpen&skinColor=Yellow',
            location: {
                country: 'Russia',
                city: 'Ivanovo'
            },
            isFollow: false,
            status: 'Like a boss'
        },
    ]
}

type ActionsTypes = ReturnType<typeof changeSubscriptionStatusAC> | ReturnType<typeof setUsersAC>

export const usersReducer = (state: UsersType = initialState, action: ActionsTypes): UsersType => {
    switch (action.type) {
        case 'CHANGE-SUBSCRIPTION-STATUS':
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

export const changeSubscriptionStatusAC = (userId: string) => (
    {
        type: 'CHANGE-SUBSCRIPTION-STATUS',
        userId
    } as const
)

export const setUsersAC = (users: UserType[]) => (
    {
        type: 'SET-USERS',
        users
    } as const
)

