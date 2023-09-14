import React from 'react';
import Profile from "./components/Pages/Profile/Profile";
import Dialogs from "./components/Pages/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import News from "./components/Pages/News/News";
import Music from "./components/Pages/Music/Music";
import Settings from "./components/Pages/Settings/Settings";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Profile/>}></Route>
                <Route path={'profile'} element={<Profile/>}></Route>
                <Route path={'dialogs'} element={<Dialogs/>}></Route>
                <Route path={'news'} element={<News/>}></Route>
                <Route path={'music'} element={<Music/>}></Route>
                <Route path={'settings'} element={<Settings/>}></Route>
                <Route></Route>
            </Route>
        </Routes>
    );
}

export default App;
