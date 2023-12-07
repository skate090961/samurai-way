import React, {ChangeEvent, memo, useState} from 'react';
import s from './MessageSender.module.css'
import {useAppDispatch} from "../../../../store/store";
import {sendMessageTC} from "../../../../store/message/thunk-message";

const MessageSender = ({senderId}: {senderId: string | undefined}) => {
    const dispatch = useAppDispatch()
    const [value, setValue] = useState<string>('')
    const [isDisabled, setIsDisabled] = useState<boolean>(false)
    const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const sendMessageHandler = () => {
        setIsDisabled(true)
        dispatch(sendMessageTC(Number(senderId), value))
            .then(() => {
                setValue('')
            })
            .finally(() => {
                setIsDisabled(false)
            })
    }

    return (
        <div className={s.sender__form}>
            <input
                value={value}
                className={s.sender__input}
                placeholder={'Type your message here'}
                onChange={changeValueHandler}
                disabled={isDisabled}
            />
            <button
                className={s.sender__button}
                onClick={sendMessageHandler}
                disabled={!value || isDisabled}
            >Send
            </button>
        </div>
    );
};

export default memo(MessageSender);