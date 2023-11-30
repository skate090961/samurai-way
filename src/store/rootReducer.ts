import {combineReducers} from "redux"
import {messageReducer} from "./message/message-reducer"
import {profileReducer} from "./profile/profile-reducer"
import {sidebarReducer} from "./sidebar/sidebar-reducer"
import {usersReducer} from "./users/users-reducer"
import {authReducer} from "./auth/auth-reducer";

export type RootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    chatPage: messageReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export default rootReducer