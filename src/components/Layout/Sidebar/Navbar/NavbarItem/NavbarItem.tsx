import React, { ReactNode } from "react"
import s from "./NavbarItem.module.css"
import { NavLink } from "react-router-dom"

type IsActiveType = {
  [key: string]: boolean
}

type MenuItemPropsType = {
  pathTo: string
  src: string | ReactNode
  title: string
}

const NavbarItem: React.FC<MenuItemPropsType> = ({ pathTo, src, title }) => {
  const setActive = ({ isActive }: IsActiveType) =>
    isActive ? `${s.menuItem__link} ${s.menuItem__link_active}` : s.menuItem__link

  return (
    <li className={s.menuItem__item}>
      <NavLink className={setActive} to={pathTo}>
        {src}
        <span className={s.menuItem__text}>{title}</span>
      </NavLink>
    </li>
  )
}

export default NavbarItem
