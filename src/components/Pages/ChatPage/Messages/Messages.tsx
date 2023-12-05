import React, {useEffect} from 'react';
import s from "./Messages.module.css";
import FriendMessage from './Message/FriendMessage/FriendMessage';
import MyMessage from "./Message/MyMessage/MyMessage";
import {useSelector} from "react-redux";
import {selectDialogs, selectMessages} from "../../../../store/message/message-selectors";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {useAppDispatch} from "../../../../store/store";
import {getMessagesTC} from "../../../../store/message/thunk-message";
import MessageSender from "../MessageSender/MessageSender";
import {Link, useParams} from "react-router-dom";
import defaultAvatar from '../../../../assets/images/user-avatar-default.jpg'
import {selectAuthUserData} from "../../../../store/auth/auth-selectors";
import {setMessagesAC} from "../../../../store/message/message-reducer";

const Messages = () => {
    const {id} = useParams()
    const messages = useSelector(selectMessages)
    const dialogs = useSelector(selectDialogs)
    const authUser = useSelector(selectAuthUserData)
    const friend = dialogs.find(dialog => dialog.id === Number(id))
    const dispatch = useAppDispatch()
    useEffect(() => {
        id && dispatch(getMessagesTC(Number(id)))
    }, [id])
    useEffect(() => {
        return () => {
            dispatch(setMessagesAC([]))
        }
    }, [])
    const myMessagesList = messages.map(message => {
            if (message.senderId !== Number(id)) {
                return <MyMessage
                    photo={authUser.photos && authUser.photos.small}
                    message={message}
                    key={message.id}
                />
            } else {

                return <FriendMessage
                    photo={friend?.photos.small}
                    message={message}
                    key={message.id}
                />
            }
        }
    )

    return (
        <div className={s.messages}>
            <div className={s.messages__header}>
                <a href={`/profile/${id}`} target={'_blank'}>
                    <img className={s.messages__header__avatar}
                         src={friend?.photos.small || defaultAvatar}
                         alt="friend_avatar"
                    />
                </a>
                <div className={s.messages_friendInfo}>
                    <Link to={`/profile/${id}`} className={s.messages__header__name}>{friend && friend.userName}</Link>
                    <span>Last activity: {friend && friend.lastUserActivityDate}</span>
                    <span className={s.messages__header__status}>offline</span>
                </div>
            </div>
            <div className={s.messages__main}>
                <ul className={s.messages__list}>
                    {myMessagesList}
                </ul>
                <MessageSender/>
            </div>
        </div>
    );
};

export default withAuthRedirect(Messages)