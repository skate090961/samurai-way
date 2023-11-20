import {combineReducers} from "redux"
import {messageReducer} from "./message-reducer/message-reducer"
import {profileReducer} from "./profile-reducer/profile-reducer"
import {sidebarReducer} from "./sidebar-reducer/sidebar-reducer"
import {usersReducer} from "./users-reducer/users-reducer"

export type RootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    chatPage: messageReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

export default rootReducer