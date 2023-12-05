import React from 'react';
import s from "./FriendMessage.module.css";
import {MessageType} from "../../../../../../api/dialogs-api";
import defaultAvatar from '../../../../../../assets/images/user-avatar-default.jpg'

type MessagePropsType = {
    message: MessageType
    photo: string | undefined
}

const FriendMessage: React.FC<MessagePropsType> = ({
                                                       message,
                                                       photo
                                                   }) => {
    const {body, addedAt} = message
    return (
        <li className={s.friendMessage__item}>
            <img className={s.friendMessage__item__avatar}
                 src={photo || defaultAvatar}
                 alt="friend_avatar"/>
            <div className={s.friendMessage__message}>
                                <span className={s.friendMessage__text}>
                                    {body}
                                </span>
                <span className={s.friendMessage__time}>{addedAt}</span>
            </div>
        </li>
    );
};

export default FriendMessage;