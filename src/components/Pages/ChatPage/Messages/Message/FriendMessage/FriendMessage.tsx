import React from 'react';
import s from "./FriendMessage.module.css";

type MessagePropsType = {
    id: string
    message: string
    avatar?: string
}

const FriendMessage: React.FC<MessagePropsType> = ({
                                                       id,
                                                       message,
                                                       avatar
                                                   }) => {
    return (
        <li className={s.friendMessage__item}>
            <img className={s.friendMessage__item__avatar}
                 src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairShavedSides&accessoriesType=Blank&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=Hoodie&clotheColor=Red&eyeType=Default&eyebrowType=UpDown&mouthType=Smile&skinColor=Pale"
                 alt="friend_avatar"/>
            <div className={s.friendMessage__message}>
                                <span className={s.friendMessage__text}>
                                    {message}
                                </span>
                <span className={s.friendMessage__time}>10:42</span>
            </div>
        </li>
    );
};

export default FriendMessage;