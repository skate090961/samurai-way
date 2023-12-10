import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Profile from "./Profile/Profile"
import ChatPage from "./ChatPage/ChatPage"
import News from "./News/News"
import Music from "./Music/Music"
import Settings from "./Settings/Settings"
import Users from "./Users/Users"
import LoginPage from "./Login/Login"

const Pages = () => {
  const PATH = {
    ROOT: "/",
    PROFILE: "profile/:userId?",
    DIALOGS: "dialogs/:id?",
    NEWS: "news",
    MUSIC: "music",
    SETTINGS: "settings",
    USERS: "users",
    LOGIN: "login",
  }

  return (
    <Routes>
      <Route path={PATH.ROOT} element={<Navigate to={PATH.PROFILE} />} />
      <Route path={PATH.PROFILE} element={<Profile />} />
      <Route path={PATH.DIALOGS} element={<ChatPage />}></Route>
      <Route path={PATH.NEWS} element={<News />}></Route>
      <Route path={PATH.MUSIC} element={<Music />}></Route>
      <Route path={PATH.SETTINGS} element={<Settings />}></Route>
      <Route path={PATH.USERS} element={<Users />}></Route>
      <Route path={PATH.LOGIN} element={<LoginPage />}></Route>
      <Route path={"404"} element={<div>Not Found Page</div>}></Route>
      <Route path={"*"} element={<Navigate to={"404"} />}></Route>
    </Routes>
  )
}

export default Pages
