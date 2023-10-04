import React, {ChangeEvent} from 'react';
import s from './MessageSender.module.css'
import {
    addNewMessageCreator,
    updateNewMessageTextCreator
} from "../../../../store/reducers/message-reducer/message-reducer";

type MessageSenderPropsType = {
    newMessageText: string
    dispatch: (action: any) => void
}

const MessageSender: React.FC<MessageSenderPropsType> = ({
                                                             newMessageText,
                                                             dispatch
                                                         }) => {
    const onMessageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateNewMessageTextCreator(e.currentTarget.value))
    }
    const addNewMessageHandler = () => {
        dispatch(addNewMessageCreator())
    }
    return (
        <div className={s.sender__form}>
            <input
                value={newMessageText}
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