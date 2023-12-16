import React from "react"
import { useParams } from "react-router-dom"
import { Dialogs } from "./Dialogs/Dialogs"
import Messages from "./Messages/Messages"
import { withAuthRedirect } from "../../../hoc/withAuthRedirect"
import styles from "./ChatPage.module.css"

const ChatPage = () => {
  const { id } = useParams()

  return (
    <div className={styles.chat}>
      <Dialogs />
      {id && <Messages />}
    </div>
  )
}

export default withAuthRedirect(ChatPage)
