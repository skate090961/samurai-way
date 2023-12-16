import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { UploadNewMessages } from "../UploadNewMessages/UploadNewMessages"
import MessageSender from "../../MessageSender/MessageSender"
import Message from "../Message/Message"
import { selectMessages } from "../../../../../store/message/message-selectors"
import { selectAuthUserData } from "../../../../../store/auth/auth-selectors"
import { DialogType } from "../../../../../api/dialogs-api"
import styles from "./MessagesList.module.css"

export const MessagesList = ({ friend }: { friend: DialogType | undefined }) => {
  const { id } = useParams()
  const messages = useSelector(selectMessages)
  const authUser = useSelector(selectAuthUserData)

  const messagesRenderList = messages.items.map((message) => {
    const isOwner = message.senderId !== Number(id)
    const ownerPhoto = authUser.photos?.small
    const friendPhoto = friend?.photos.small
    const photo = isOwner ? ownerPhoto : friendPhoto
    return <Message message={message} photo={photo} isOwner={isOwner} key={message.id} />
  })

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <UploadNewMessages />
        {messagesRenderList}
      </ul>
      <MessageSender senderId={id || id} />
    </div>
  )
}
