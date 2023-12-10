import React from "react"
import s from "./ChatPage.module.css"
import Dialogs from "./Dialogs/Dialogs"
import Messages from "./Messages/Messages"
import { withAuthRedirect } from "../../../hoc/withAuthRedirect"
import { useParams } from "react-router-dom"

const ChatPage = () => {
  const { id } = useParams()

  return (
    <div className={s.chat__page}>
      <Dialogs />
      {id && <Messages />}
    </div>
  )
}

export default withAuthRedirect(ChatPage)
