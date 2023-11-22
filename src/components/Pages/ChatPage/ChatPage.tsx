import React from 'react'
import s from "./ChatPage.module.css"
import Dialogs from "./Dialogs/Dialogs"
import Messages from "./Messages/Messages"
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

const ChatPage = () => {
    return (
        <div className={s.chat__page}>
            <Dialogs/>
            <Messages/>
        </div>
    )
}

export default withAuthRedirect(ChatPage)