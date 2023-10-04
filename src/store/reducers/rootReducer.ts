import {combineReducers} from "redux";
import {messageReducer} from "./message-reducer/message-reducer";
import {profileReducer} from "./profile-reducer/profile-reducer";
import {sidebarReducer} from "./sidebar-reducer/sidebar-reducer";

const rootReducer = combineReducers({
    chatPage: messageReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer
})

export default rootReducer