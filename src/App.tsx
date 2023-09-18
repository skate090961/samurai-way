import React from 'react';
import Profile from "./components/Pages/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import News from "./components/Pages/News/News";
import Music from "./components/Pages/Music/Music";
import Settings from "./components/Pages/Settings/Settings";
import ChatPage from "./components/Pages/ChatPage/ChatPage";
import {StateType} from "./state/state";

type AppPropsType = {
    state: StateType
}

const App: React.FC<AppPropsType> = ({
                                         state
             }) => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout sidebarData={state.sidebar}/>}>
                <Route index element={<Profile profileData={state.profilePage}/>}></Route>
                <Route path={'profile'} element={<Profile profileData={state.profilePage}/>}></Route>
                <Route path={'dialogs/*'} element={<ChatPage chatData={state.chatPage}/>}></Route>
                <Route path={'news'} element={<News/>}></Route>
                <Route path={'music'} element={<Music/>}></Route>
                <Route path={'settings'} element={<Settings/>}></Route>
            </Route>
            <Route path={'*'} element={<div>Not Found Page</div>}></Route>
        </Routes>
    );
}

export default App;
