import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Dialog } from "./Dialog/Dialog"
import { selectDialogs } from "../../../../store/message/message-selectors"
import { useAppDispatch } from "../../../../store/store"
import { getDialogsTC, updateDialogsTC } from "../../../../store/message/thunk-message"
import { selectAuthUserData } from "../../../../store/auth/auth-selectors"
import defaultAvatar from "../../../../assets/images/user-avatar-default.jpg"
import styles from "./Dialogs.module.css"

export const Dialogs = () => {
  const { id } = useParams()
  const dialogs = useSelector(selectDialogs)
  const authUser = useSelector(selectAuthUserData)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const isDialogId = dialogs.some((dialog) => dialog.id === Number(id))
    dispatch(getDialogsTC())
    if (!isDialogId) {
      dispatch(updateDialogsTC(Number(id)))
    }
  }, [])

  const dialogsList = dialogs.map((dialog) => <Dialog dialog={dialog} key={dialog.id} />)

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.photo} src={authUser.photos?.small || defaultAvatar} alt="profile_avatar" />
        <span className={styles.title}>Dialogs</span>
      </div>
      <ul className={styles.dialogs}>{dialogsList}</ul>
    </div>
  )
}
