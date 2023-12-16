import React from "react"
import { NavLink } from "react-router-dom"
import { DialogType } from "../../../../../api/dialogs-api"
import defaultAvatar from "../../../../../assets/images/user-avatar-default.jpg"
import styles from "./Dialog.module.css"

type DialogsItemPropsType = {
  dialog: DialogType
}

type IsActiveType = {
  [key: string]: boolean
}

export const Dialog: React.FC<DialogsItemPropsType> = ({ dialog }) => {
  const { id, photos, userName, newMessagesCount } = dialog
  const photo = photos.small || defaultAvatar
  const setActive = ({ isActive }: IsActiveType) => (isActive ? `${styles.link} ${styles.link_active}` : styles.link)

  return (
    <li className={styles.dialog}>
      <NavLink className={setActive} to={`/dialogs/${id}`}>
        <img className={styles.photo} src={photo} alt="friend_avatar" />
        <div className={styles.body}>
          <span>{userName}</span>
          <span className={styles.message}>
            {newMessagesCount === 1 && `new message`}
            {newMessagesCount > 1 && `${newMessagesCount} new messages`}
          </span>
        </div>
      </NavLink>
    </li>
  )
}
