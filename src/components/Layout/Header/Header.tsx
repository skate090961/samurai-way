import React from "react"
import s from "./Header.module.css"
import { useSelector } from "react-redux"
import { RootStateType } from "../../../store/rootReducer"
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown"
import { Link } from "react-router-dom"

const Header = () => {
  const isAuth = useSelector<RootStateType, boolean>((state) => state.auth.isAuth)

  return (
    <header className={s.header}>
      <Link to={"/profile"}>
        <img
          src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
          alt="logo"
          className={s.logo}
        />
      </Link>
      <div className={s.login_container}>
        {isAuth ? (
          <ProfileDropdown />
        ) : (
          <Link to={"login"} className={s.login}>
            Sign In
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header
