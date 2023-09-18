import React from 'react';
import s from "./Messages.module.css";
import MessageSender from "../MessageSender/MessageSender";
import FriendMessage from './Message/FriendMessage/FriendMessage';
import MyMessage from "./Message/MyMessage/MyMessage";
import {MessagesType} from "../../../../state/state";


type MessagesPropsType = {
    messagesData: MessagesType[]
}

const Messages: React.FC<MessagesPropsType> = ({
                                                   messagesData
                                               }) => {
    const friendsMessagesList = messagesData.map(f =>
        <FriendMessage
            key={f.id}
            id={f.id}
            message={f.message}
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
                    <span className={s.messages__header__name}>Artem Moiseev</span>
                    <span className={s.messages__header__status}>offline</span>
                </div>
            </div>
            <div className={s.messages__main}>
                <ul className={s.messages__list}>
                    {friendsMessagesList}
                    <MyMessage/>
                </ul>
                <MessageSender/>
            </div>
        </div>
    );
};

export default Messages;