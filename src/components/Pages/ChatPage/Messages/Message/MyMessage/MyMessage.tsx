import React from 'react';
import s from './MyMessage.module.css'
import {MessageType} from "../../../../../../api/dialogs-api";
import defaultAvatar from '../../../../../../assets/images/user-avatar-default.jpg'

type MyMessagePropsType = {
    message: MessageType
    photo: string | null
}

const MyMessage: React.FC<MyMessagePropsType> = ({
                                                     message,
                                                     photo
                                                   }) => {
    const {body, addedAt} = message
    return (
        <li className={s.myMessage__item}>
            <img className={s.myMessage__item__avatar}
                 src={photo || defaultAvatar}
                 alt="friend_avatar"/>
            <div className={s.myMessage__message}>
                                <span className={s.myMessage__text}>
                                    {body}
                                </span>
                <span className={s.myMessage__time}>{addedAt}</span>
            </div>
        </li>
    );
};

export default MyMessage;