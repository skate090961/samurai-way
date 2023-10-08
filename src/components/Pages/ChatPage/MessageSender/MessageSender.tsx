import React, {ChangeEvent} from 'react';
import s from './MessageSender.module.css'

type MessageSenderPropsType = {
    messageText: string
    updateMessageText: (text: string) => void
    addMessage: () => void
}

const MessageSender: React.FC<MessageSenderPropsType> = ({
                                                             messageText,
                                                             updateMessageText,
                                                             addMessage
                                                         }) => {
    const onMessageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updateMessageText(e.currentTarget.value)
    }
    const addNewMessageHandler = () => {
        addMessage()
    }
    return (
        <div className={s.sender__form}>
            <input
                value={messageText}
                className={s.sender__input}
                placeholder={'Type your message here'}
                onChange={onMessageChangeHandler}
            />
            <button
                className={s.sender__button}
                onClick={addNewMessageHandler}
            >Send
            </button>
        </div>
    );
};

export default MessageSender;