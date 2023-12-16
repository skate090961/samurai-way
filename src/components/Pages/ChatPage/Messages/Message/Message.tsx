import React, { useState } from "react"
import s from "./Message.module.css"
import { MessageType } from "../../../../../api/dialogs-api"
import defaultAvatar from "../../../../../assets/images/user-avatar-default.jpg"
import { useAppDispatch } from "../../../../../store/store"
import { removeMessageTC } from "../../../../../store/message/thunk-message"
import { formatTime } from "../../../../../utils/date/getRefactorDateAndTime"
import { IconButton } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"

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
          <IconButton
            onClick={removeMessageHandler}
            disabled={isDisabledRemoveButton}
            size={"medium"}
            sx={{ padding: 0, color: `${isOwner ? "#beebff" : "#888888"}` }}
          >
            <DeleteIcon />
          </IconButton>
          <span className={s.date}>{formatTime(addedAt)}</span>
        </div>
      </div>
    </li>
  )
}

export default Message
