import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectDialogs } from "../../../../store/message/message-selectors"
import { withAuthRedirect } from "../../../../hoc/withAuthRedirect"
import { useAppDispatch } from "../../../../store/store"
import { getMessagesTC } from "../../../../store/message/thunk-message"
import { removeMessagesAC } from "../../../../store/message/message-reducer"
import { MessagesHeader } from "./MessagesHeader/MessagesHeader"
import { LoadingMessages } from "./LoadingMessages/LoadingMessages"
import { MessagesList } from "./MessagesList/MessagesList"
import styles from "./Messages.module.css"

const Messages = () => {
  const { id } = useParams()
  const dialogs = useSelector(selectDialogs)
  const friend = dialogs.find((dialog) => dialog.id === Number(id))
  const dispatch = useAppDispatch()
  const [isLoader, setIsLoader] = useState<boolean>(false)
  useEffect(() => {
    setIsLoader(true)
    dispatch(getMessagesTC(Number(id))).finally(() => setIsLoader(false))

    return () => {
      dispatch(removeMessagesAC())
    }
  }, [id])

  return (
    <div className={styles.messages}>
      <MessagesHeader friend={friend} />
      {isLoader ? <LoadingMessages /> : <MessagesList friend={friend} />}
    </div>
  )
}

export default withAuthRedirect(Messages)
