import React from 'react';
import s from "./ChatPage.module.css";
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";
import {ChatPageType} from "../../../store/store";

type ChatPagePropsType = {
    chatData: ChatPageType
    dispatch: (action: any) => void
}

const ChatPage: React.FC<ChatPagePropsType> = ({
                                                   chatData,
                                                   dispatch
                                               }) => {
    return (
        <div className={s.chat__page}>
            <Dialogs dialogsData={chatData.dialogs}/>
            <Messages chatData={chatData} dispatch={dispatch}/>
        </div>
    );
};

export default ChatPage;