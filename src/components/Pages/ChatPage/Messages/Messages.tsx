import React from 'react';
import s from "./Messages.module.css";
import FriendMessage from './Message/FriendMessage/FriendMessage';
import MyMessage from "./Message/MyMessage/MyMessage";
import MessageSenderContainer from "../MessageSender/MessageSenderContainer";
import {useSelector} from "react-redux";
import {selectMessages} from "../../../../store/message/message-selectors";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";

const Messages = () => {
    const messages = useSelector(selectMessages)
    const myMessagesList = messages.map(m =>
        <MyMessage
            key={m.id}
            id={m.id}
            message={m.message}
            time={m.time}
        />
    )

    return (
        <div className={s.messages}>
            <div className={s.messages__header}>
                <img className={s.messages__header__avatar}
                     src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairShavedSides&accessoriesType=Blank&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=Hoodie&clotheColor=Red&eyeType=Default&eyebrowType=UpDown&mouthType=Smile&skinColor=Pale"
                     alt="friend_avatar"
                />
                <div className={s.messages_friendInfo}>
                    <span className={s.messages__header__name}>Ivan Ivanov</span>
                    <span className={s.messages__header__status}>offline</span>
                </div>
            </div>
            <div className={s.messages__main}>
                <ul className={s.messages__list}>
                    <FriendMessage/>
                    {myMessagesList}
                </ul>
                <MessageSenderContainer/>
            </div>
        </div>
    );
};

export default withAuthRedirect(Messages)