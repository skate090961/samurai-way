import React, { useEffect, useState } from "react"
import s from "./Messages.module.css"
import { useSelector } from "react-redux"
import { selectDialogs, selectMessages } from "../../../../store/message/message-selectors"
import { withAuthRedirect } from "../../../../hoc/withAuthRedirect"
import { useAppDispatch } from "../../../../store/store"
import { getMessagesTC } from "../../../../store/message/thunk-message"
import MessageSender from "../MessageSender/MessageSender"
import { useParams } from "react-router-dom"
import defaultAvatar from "../../../../assets/images/user-avatar-default.jpg"
import { selectAuthUserData } from "../../../../store/auth/auth-selectors"
import { setMessagesAC } from "../../../../store/message/message-reducer"
import TailSpinLoader from "../../../Loaders/TailSpinLoader/TailSpinLoader"
import Message from "./Message/Message"

const Messages = () => {
  const { id } = useParams()
  const messages = useSelector(selectMessages)
  const dialogs = useSelector(selectDialogs)
  const authUser = useSelector(selectAuthUserData)
  const friend = dialogs.find((dialog) => dialog.id === Number(id))
  const dispatch = useAppDispatch()
  const [isLoader, setIsLoader] = useState<boolean>(false)
  useEffect(() => {
    setIsLoader(true)
    id && dispatch(getMessagesTC(Number(id))).finally(() => setIsLoader(false))
  }, [id, dispatch])
  useEffect(() => {
    return () => {
      dispatch(setMessagesAC([]))
    }
  }, [dispatch])
  const messagesRenderList = messages.items.map((message) => {
    const isOwner = message.senderId !== Number(id)
    const ownerPhoto = authUser.photos?.small
    const friendPhoto = friend?.photos.small
    const photo = isOwner ? ownerPhoto : friendPhoto
    return <Message message={message} photo={photo} isOwner={isOwner} key={message.id} />
  })
  return (
    <div className={s.messages}>
      <div className={s.messages__header}>
        <a href={`/profile/${id}`} target={"_blank"} rel="noreferrer">
          <img className={s.messages__header__avatar} src={friend?.photos.small || defaultAvatar} alt="friend_avatar" />
        </a>
        <div className={s.messages_friendInfo}>
          <a href={`/profile/${id}`} target={"_blank"} rel="noreferrer" className={s.messages__header__name}>
            {friend && friend.userName}
          </a>
          <span>Last activity: {friend && friend.lastUserActivityDate}</span>
          <span className={s.messages__header__status}>offline</span>
        </div>
      </div>
      <>
        {isLoader ? (
          <div className={s.loader}>
            <TailSpinLoader />
          </div>
        ) : (
          <div className={s.messages__main}>
            <ul className={s.messages__list}>{messagesRenderList}</ul>
            <MessageSender senderId={id || id} />
          </div>
        )}
      </>
    </div>
  )
}

export default withAuthRedirect(Messages)
