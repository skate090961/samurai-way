import React from 'react'
import s from './MessageButton.module.css'
import {Link} from "react-router-dom";

const MessageButton = ({userId}: {userId: string}) => {
    return (
        <Link to={`/dialogs/${userId}`} className={s.button_message}>
            Message
        </Link>
    )
}

export default MessageButton