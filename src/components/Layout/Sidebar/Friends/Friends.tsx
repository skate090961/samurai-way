import React from "react"
import s from "./Friends.module.css"
import Friend from "./Friend/Friend"
import { useSelector } from "react-redux"
import { selectSidebarFriends } from "../../../../store/sidebar/sidebar-selectors"

const Friends = () => {
  const friends = useSelector(selectSidebarFriends)

  const friendsList = friends.map((f) => <Friend key={f.id} id={f.id} name={f.name} avatar={f.avatar} />)
  return (
    <div className={s.friends}>
      <span className={s.friends__title}>Friends</span>
      <ul className={s.friends__container}>{friendsList}</ul>
    </div>
  )
}

export default Friends
