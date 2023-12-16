import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { ProfileDropdown } from "./ProfileDropdown/ProfileDropdown"
import { selectIsAuth } from "../../../store/auth/auth-selectors"
import { SignInButton } from "./SignInButton/SignInButton"
import styles from "./Header.module.css"
import { Logo } from "./Logo/Logo"

export const Header = () => {
  const isAuth = useSelector(selectIsAuth)

  return (
    <header className={styles.header}>
      <Link to={"/profile"}>
        <Logo />
      </Link>
      {isAuth ? <ProfileDropdown /> : <SignInButton />}
    </header>
  )
}
