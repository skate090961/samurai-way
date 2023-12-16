import React from "react"
import { Link, useParams } from "react-router-dom"
import defaultAvatar from "../../../../../assets/images/user-avatar-default.jpg"
import { DialogType } from "../../../../../api/dialogs-api"
import styles from "./MessagesHeader.module.css"

export const MessagesHeader = ({ friend }: { friend: DialogType | undefined }) => {
  const { id } = useParams()
  return (
    <div className={styles.header}>
      <Link to={`/profile/${id}`}>
        <img className={styles.photo} src={friend?.photos.small || defaultAvatar} alt="friend_avatar" />
      </Link>
      <div className={styles.info}>
        <Link to={`/profile/${id}`} className={styles.name}>
          {friend && friend.userName}
        </Link>
        <span className={styles.status}>offline</span>
      </div>
    </div>
  )
}
