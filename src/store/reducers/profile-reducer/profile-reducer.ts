import {ProfilePageType} from "../../store";
import {getRefactorDateAndTime} from "../../../utils/date/getRefactorDateAndTime";

type ActionsTypes = ReturnType<typeof addPostCreator> | ReturnType<typeof updateNewPostTextCreator>

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
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