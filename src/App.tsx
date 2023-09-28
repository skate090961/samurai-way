import React from 'react';
import Profile from "./components/Pages/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import News from "./components/Pages/News/News";
import Music from "./components/Pages/Music/Music";
import Settings from "./components/Pages/Settings/Settings";
import ChatPage from "./components/Pages/ChatPage/ChatPage";
import {StoreType} from "./state/state";

type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = ({
                                         store
                                     }) => {
    const state = store.getState()
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
            <Route path={PATH.ROOT} element={<Layout sidebarData={state.sidebar}/>}>
                <Route index element={<Profile profileData={state.profilePage} addPost={store.addPost.bind(store)}
                                               updateNewPostText={store.updateNewPostText.bind(store)}/>}></Route>
                <Route path={PATH.PROFILE}
                       element={<Profile profileData={state.profilePage} addPost={store.addPost.bind(store)}
                                         updateNewPostText={store.updateNewPostText.bind(store)}/>}></Route>
                <Route path={PATH.DIALOGS} element={<ChatPage chatData={state.chatPage}/>}></Route>
                <Route path={PATH.NEWS} element={<News/>}></Route>
                <Route path={PATH.MUSIC} element={<Music/>}></Route>
                <Route path={PATH.SETTINGS} element={<Settings/>}></Route>
            </Route>
            <Route path={'*'} element={<div>Not Found Page</div>}></Route>
        </Routes>
    );
}

export default App;
