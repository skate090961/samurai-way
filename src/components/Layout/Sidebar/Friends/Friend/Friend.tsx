import React from "react"
import s from "./Friend.module.css"
import { NavLink } from "react-router-dom"

type IsActiveType = {
  [key: string]: boolean
}
type FriendsPropsType = {
  id: string
  name: string
  avatar: string
}

const Friend: React.FC<FriendsPropsType> = ({ id, name, avatar }) => {
  const setActive = ({ isActive }: IsActiveType) =>
    isActive ? `${s.friends__link} ${s.friends__link_active}` : s.friends__link

  return (
    <li className={s.friends__item}>
      <NavLink className={setActive} to={`#`}>
        <img className={s.friends__avatar} src={avatar} alt="friend_avatar" />
        <span className={s.friends__name}>{name}</span>
      </NavLink>
    </li>
  )
}

export default Friend
