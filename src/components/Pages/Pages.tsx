import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Profile from "./Profile/Profile";
import ChatPage from "./ChatPage/ChatPage";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

type PagesPropsType = {
    store: any
}

const Pages: React.FC<PagesPropsType> = ({
                                             store
                                         }) => {
    const state = store.getState()
    const dispatch = store.dispatch.bind(store)
    const PATH = {
        ROOT: '/',
        PROFILE: 'profile',
        DIALOGS: 'dialogs/*',
        NEWS: 'news',
        MUSIC: 'music',
        SETTINGS: 'settings'
    }

    return (
        <Routes>
            <Route path={PATH.ROOT} element={<Navigate to={PATH.PROFILE}/>}/>
            <Route path={PATH.PROFILE} element={<Profile profileData={state.profilePage} dispatch={dispatch}/>}/>
            <Route path={PATH.DIALOGS} element={<ChatPage chatData={state.chatPage} dispatch={dispatch}/>}></Route>
            <Route path={PATH.NEWS} element={<News/>}></Route>
            <Route path={PATH.MUSIC} element={<Music/>}></Route>
            <Route path={PATH.SETTINGS} element={<Settings/>}></Route>
            <Route path={'*'} element={<div>Not Found Page</div>}></Route>
        </Routes>
    );
};

export default Pages;