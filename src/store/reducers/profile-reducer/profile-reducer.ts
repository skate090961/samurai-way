import {getRefactorDateAndTime} from "../../../utils/date/getRefactorDateAndTime";

export type PostsType = {
    id: string
    text: string
    likesCount: number
    date: string
}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

type ActionsTypes = ReturnType<typeof addPostCreator> | ReturnType<typeof updateNewPostTextCreator>

const initialState: ProfilePageType = {
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
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: String(new Date().getTime()),
                likesCount: 0,
                text: state.newPostText,
                date: getRefactorDateAndTime()
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText}
        default:
            return state
    }
}

export const addPostCreator = () => ({type: 'ADD-POST'} as const)
export const updateNewPostTextCreator = (newText: string) => (
    {type: 'UPDATE-NEW-POST-TEXT', newText} as const
)