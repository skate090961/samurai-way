import React, { ReactNode } from "react"
import s from "./NavbarItem.module.css"
import { NavLink } from "react-router-dom"
import NewMessagesCount from "./NewMessagesCount/NewMessagesCount"

type IsActiveType = {
  [key: string]: boolean
}

type MenuItemPropsType = {
  pathTo: string
  src: string | ReactNode
  title: string
  newMessagesCount?: number
}

const NavbarItem: React.FC<MenuItemPropsType> = ({ pathTo, src, title, newMessagesCount }) => {
  const setActive = ({ isActive }: IsActiveType) =>
    isActive ? `${s.menuItem__link} ${s.menuItem__link_active}` : s.menuItem__link

  return (
    <li className={s.menuItem__item}>
      <NavLink className={setActive} to={pathTo}>
        {src}
        <span className={s.menuItem__text}>{title}</span>
        {!!newMessagesCount && <NewMessagesCount newMessagesCount={newMessagesCount} />}
      </NavLink>
    </li>
  )
}

export default NavbarItem
