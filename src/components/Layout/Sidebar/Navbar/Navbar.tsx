import React from "react"
import s from "./Navbar.module.css"
import NavbarItem from "./NavbarItem/NavbarItem"
import { BsChat, BsSearch } from "react-icons/bs"
import { IoNewspaperOutline, IoSettingsOutline } from "react-icons/io5"
import { FaRegUser } from "react-icons/fa"
import { IoMdMusicalNotes } from "react-icons/io"
import { useSelector } from "react-redux"
import { selectAuthUserData } from "../../../../store/auth/auth-selectors"

const Navbar = () => {
  const { newMessagesCount } = useSelector(selectAuthUserData)

  return (
    <nav className={s.menu}>
      <ul className={s.menu__list}>
        <NavbarItem pathTo={"profile"} src={<FaRegUser style={{ width: "20px" }} />} title={"Profile"} />
        <NavbarItem
          pathTo={"dialogs"}
          src={<BsChat style={{ width: "20px" }} />}
          title={"Messages"}
          newMessagesCount={newMessagesCount}
        />
        <NavbarItem pathTo={"news"} src={<IoNewspaperOutline style={{ width: "20px" }} />} title={"News"} />
        <NavbarItem pathTo={"music"} src={<IoMdMusicalNotes style={{ width: "20px" }} />} title={"Music"} />
        <NavbarItem pathTo={"settings"} src={<IoSettingsOutline style={{ width: "20px" }} />} title={"Settings"} />
        <NavbarItem pathTo={"users"} src={<BsSearch style={{ width: "20px" }} />} title={"Find Users"} />
      </ul>
      <div className={s.horizontal_line}></div>
    </nav>
  )
}

export default Navbar
