import {profileReducer} from "./reducers/profile-reducer/profile-reducer";
import {messageReducer} from "./reducers/message-reducer/message-reducer";
import {sidebarReducer} from "./reducers/sidebar-reducer/sidebar-reducer";

type PostsType = {
    id: string
    text: string
    likesCount: number
    date: string
}
type DialogsType = {
    id: string
    name: string
    avatar: string
}
type MessagesType = {
    id: string
    message: string
    time: string
}
type FriendsType = {
    id: string
    name: string
    avatar: string
}
type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}
type ChatPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}
type SidebarType = {
    friends: FriendsType[]
}
type StateType = {
    profilePage: ProfilePageType
    chatPage: ChatPageType
    sidebar: SidebarType
}
type StoreType = {
    _state: StateType
    _rerenderEntireTree: () => void
    getState: () => StateType
    subscriber: (observer: () => void) => void
    dispatch: (action: any) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: '1',
                    likesCount: 9,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    date: '1 янв 2023 в 14:56'
                },
                {
                    id: '2',
                    likesCount: 14,
                    text: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.',
                    date: '9 янв 2023 в 21:34'
                },
            ],
            newPostText: ''
        },
        chatPage: {
            dialogs: [
                {
                    id: '1',
                    name: 'Natalia Delores',
                    avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBun&accessoriesType=Sunglasses&hairColor=Red&facialHairType=MoustacheMagnum&facialHairColor=Red&clotheType=BlazerShirt&eyeType=Hearts&eyebrowType=AngryNatural&mouthType=Eating&skinColor=Yellow'
                },
                {
                    id: '2',
                    name: 'Everett Nic',
                    avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Sunglasses&hairColor=PastelPink&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=Hoodie&clotheColor=PastelRed&eyeType=EyeRoll&eyebrowType=SadConcernedNatural&mouthType=Eating&skinColor=Light'
                },
                {
                    id: '3',
                    name: 'Jessica Jarrod',
                    avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Kurt&hatColor=Pink&clotheType=CollarSweater&clotheColor=Gray02&eyeType=Wink&eyebrowType=Angry&mouthType=Concerned&skinColor=Yellow'
                },
                {
                    id: '4',
                    name: 'Neil Clem',
                    avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Wayfarers&hairColor=Blue&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=CollarSweater&clotheColor=Heather&eyeType=Default&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=Yellow'
                },
                {
                    id: '5',
                    name: 'Fortune Jeane',
                    avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Kurt&hairColor=Red&facialHairType=Blank&facialHairColor=BlondeGolden&clotheType=ShirtCrewNeck&clotheColor=PastelBlue&graphicType=Diamond&eyeType=WinkWacky&eyebrowType=Default&mouthType=Default&skinColor=Brown'
                },
                {
                    id: '6',
                    name: 'Hattie Thurstan',
                    avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=Auburn&clotheType=ShirtScoopNeck&clotheColor=Heather&eyeType=Dizzy&eyebrowType=AngryNatural&mouthType=Concerned&skinColor=Yellow'
                },
                {
                    id: '7',
                    name: 'Lora Burke',
                    avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Prescription01&hairColor=Auburn&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=Red&graphicType=Diamond&eyeType=Squint&eyebrowType=SadConcerned&mouthType=Disbelief&skinColor=Light'
                },
            ],
            messages: [
                {id: '1', message: 'Elvis has left the building', time: '13:23'},
                {id: '2', message: 'Beating around the bush', time: '13:26'},
                {id: '3', message: 'A fool and his money are soon parted', time: '15:23'},
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                {
                    id: '5',
                    name: 'Fortune Jeane',
                    avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Kurt&hairColor=Red&facialHairType=Blank&facialHairColor=BlondeGolden&clotheType=ShirtCrewNeck&clotheColor=PastelBlue&graphicType=Diamond&eyeType=WinkWacky&eyebrowType=Default&mouthType=Default&skinColor=Brown'
                },
                {
                    id: '6',
                    name: 'Hattie Thurstan',
                    avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=Auburn&clotheType=ShirtScoopNeck&clotheColor=Heather&eyeType=Dizzy&eyebrowType=AngryNatural&mouthType=Concerned&skinColor=Yellow'
                },
                {
                    id: '7',
                    name: 'Lora Burke',
                    avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Prescription01&hairColor=Auburn&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=Red&graphicType=Diamond&eyeType=Squint&eyebrowType=SadConcerned&mouthType=Disbelief&skinColor=Light'
                },
            ]
        }
    },
    _rerenderEntireTree: function () {
        //empty
    },
    getState() {
        return this._state
    },
    subscriber(observer: () => void) {
        this._rerenderEntireTree = observer
    },
    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.chatPage = messageReducer(this._state.chatPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._rerenderEntireTree()
    }
}

export default {}