import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Profile from "./Profile/Profile"
import ChatPage from "./ChatPage/ChatPage"
import News from "./News/News"
import Music from "./Music/Music"
import Settings from "./Settings/Settings"
import Users from "./Users/Users"
import LoginPage from "./Login/Login"
import NotFoundPage from "./NotFoundPage/NotFoundPage"
import { RoutesEnum } from "../../constans/routes"

const Pages = () => {
  return (
    <Routes>
      <Route path={RoutesEnum.Home} element={<Navigate to={RoutesEnum.Profile} />} />
      <Route path={RoutesEnum.Profile} element={<Profile />} />
      <Route path={RoutesEnum.Dialogs} element={<ChatPage />}></Route>
      <Route path={RoutesEnum.News} element={<News />}></Route>
      <Route path={RoutesEnum.Music} element={<Music />}></Route>
      <Route path={RoutesEnum.Settings} element={<Settings />}></Route>
      <Route path={RoutesEnum.Users} element={<Users />}></Route>
      <Route path={RoutesEnum.Login} element={<LoginPage />}></Route>
      <Route path={"404"} element={<NotFoundPage />}></Route>
      <Route path={"*"} element={<Navigate to={"404"} />}></Route>
    </Routes>
  )
}

export default Pages
