import { ProfileResponseType } from "../../api/profile-api"
import { PhotosType } from "../../api/users-api"
import { v1 } from "uuid"

const initialState: ProfilePageType = {
  posts: [
    {
      id: v1(),
      likesCount: 9,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "11 Dec at 7:09 pm",
    },
  ],
  profile: null,
  isLoading: false,
  status: "",
  isFollow: false,
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
  switch (action.type) {
    case "PROFILE/ADD-POST":
      const newPost = {
        id: String(new Date().getTime()),
        likesCount: 0,
        text: action.text,
        date: "today",
      }
      return { ...state, posts: [newPost, ...state.posts] }
    case "PROFILE/SET-USER-PROFILE":
      return { ...state, profile: action.profile }
    case "PROFILE/TOGGLE-PROFILE-LOADING":
      return { ...state, isLoading: action.isLoading }
    case "PROFILE/SET-PROFILE-STATUS":
      return { ...state, status: action.status }
    case "PROFILE/SET-IS-FOLLOW":
      return { ...state, isFollow: action.isFollowed }
    case "PROFILE/UPDATE-PHOTOS":
      return { ...state, profile: state.profile && { ...state.profile, photos: action.photos } }
    case "PROFILE/INCREMENT-LIKE-COUNT":
      return {
        ...state,
        posts: state.posts.map((p) => (p.id === action.postId ? { ...p, likesCount: p.likesCount + 1 } : p)),
      }
    case "PROFILE/DECREMENT-LIKE-COUNT":
      return {
        ...state,
        posts: state.posts.map((p) => (p.id === action.postId ? { ...p, likesCount: p.likesCount - 1 } : p)),
      }
    case "PROFILE/REMOVE-POST":
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      }
    case "PROFILE/UPDATE-POST":
      return {
        ...state,
        posts: state.posts.map((p) => (p.id === action.postId ? { ...p, text: action.value } : p)),
      }
    default:
      return state
  }
}

//type
export type PostType = {
  id: string
  text: string
  likesCount: number
  date: string
}
export type ProfilePageType = {
  posts: PostType[]
  profile: ProfileResponseType | null
  isLoading: boolean
  status: string
  isFollow: boolean
}

type ActionsTypes =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof setUserProfileAC>
  | ReturnType<typeof toggleProfileLoadingAC>
  | ReturnType<typeof setStatusAC>
  | ReturnType<typeof setIsFollowAC>
  | ReturnType<typeof updatePhotosAC>
  | ReturnType<typeof incrementLikeCountAC>
  | ReturnType<typeof decrementLikeCountAC>
  | ReturnType<typeof removePostAC>
  | ReturnType<typeof updatePostTC>

//action
export const addPostAC = (text: string) => ({ type: "PROFILE/ADD-POST", text }) as const
export const setUserProfileAC = (profile: ProfileResponseType | null) =>
  ({ type: "PROFILE/SET-USER-PROFILE", profile }) as const
export const toggleProfileLoadingAC = (isLoading: boolean) =>
  ({ type: "PROFILE/TOGGLE-PROFILE-LOADING", isLoading }) as const
export const setStatusAC = (status: string) => ({ type: "PROFILE/SET-PROFILE-STATUS", status }) as const
export const setIsFollowAC = (isFollowed: boolean) => ({ type: "PROFILE/SET-IS-FOLLOW", isFollowed }) as const
export const updatePhotosAC = (photos: PhotosType) => ({ type: "PROFILE/UPDATE-PHOTOS", photos }) as const
export const incrementLikeCountAC = (postId: string) => ({ type: "PROFILE/INCREMENT-LIKE-COUNT", postId }) as const
export const decrementLikeCountAC = (postId: string) => ({ type: "PROFILE/DECREMENT-LIKE-COUNT", postId }) as const
export const removePostAC = (postId: string) => ({ type: "PROFILE/REMOVE-POST", postId }) as const
export const updatePostTC = (postId: string, value: string) => ({ type: "PROFILE/UPDATE-POST", postId, value }) as const
