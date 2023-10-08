import React from 'react';
import s from "./ChatPage.module.css";
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";

const ChatPage = () => {
    return (
        <div className={s.chat__page}>
            <Dialogs/>
            <Messages/>
        </div>
    );
};

export default ChatPage;