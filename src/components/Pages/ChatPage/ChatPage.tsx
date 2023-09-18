import React from 'react';
import s from "./ChatPage.module.css";
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";
import {ChatPageType} from "../../../state/state";

type ChatPagePropsType = {
    chatData: ChatPageType
}

const ChatPage: React.FC<ChatPagePropsType> = ({
                      chatData
                  }) => {
    return (
        <div className={s.chat__page}>
            <Dialogs dialogsData={chatData.dialogs}/>
            <Messages messagesData={chatData.messages}/>
        </div>
    );
};

export default ChatPage;