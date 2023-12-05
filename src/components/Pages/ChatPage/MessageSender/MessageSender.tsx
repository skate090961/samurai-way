import React from 'react';
import s from './MessageSender.module.css'

type MessageSenderPropsType = {

}

const MessageSender = () => {
    // const onMessageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     updateMessageText(e.currentTarget.value)
    // }
    // const addNewMessageHandler = () => {
    //     addMessage()
    // }
    return (
        <div className={s.sender__form}>
            <input
                value={''}
                className={s.sender__input}
                placeholder={'Type your message here'}
                onChange={() => {}}
            />
            <button
                className={s.sender__button}
                onClick={() => {}}
            >Send
            </button>
        </div>
    );
};

export default MessageSender;