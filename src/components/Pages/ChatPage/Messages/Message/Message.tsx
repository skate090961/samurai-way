import React, { useState } from "react"
import s from "./Message.module.css"
import { MessageType } from "../../../../../api/dialogs-api"
import defaultAvatar from "../../../../../assets/images/user-avatar-default.jpg"
import { useAppDispatch } from "../../../../../store/store"
import { removeMessageTC } from "../../../../../store/message/thunk-message"
import { FaTrash } from "react-icons/fa"

type MessagePropsType = {
  message: MessageType
  photo: string | undefined
  isOwner: boolean
}

const Message: React.FC<MessagePropsType> = ({ message, photo, isOwner }) => {
  const [isDisabledRemoveButton, setIsDisabledRemoveButton] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const removeMessageHandler = () => {
    setIsDisabledRemoveButton(true)
    dispatch(removeMessageTC(message.id)).catch(() => setIsDisabledRemoveButton(false))
  }
  const { body, addedAt } = message
  return (
    <li className={`${s.container} ${isOwner && s.owner_container}`}>
      <img className={s.avatar} src={photo || defaultAvatar} alt="friend_avatar" />
      <div className={`${s.message} ${isOwner ? s.owner_message : s.friend_message}`}>
        <span className={`${s.message_text} ${isOwner && s.owner_message_text}`}>{body}</span>
        <div className={`${s.message_info} ${isOwner ? s.owner_message_info : s.friend_message_info}`}>
          <button onClick={removeMessageHandler} className={s.removeButton} disabled={isDisabledRemoveButton}>
            <FaTrash />
          </button>
          <span className={s.date}>{addedAt}</span>
        </div>
      </div>
    </li>
  )
}

export default Message
