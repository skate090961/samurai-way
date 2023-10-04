import React from 'react';
import s from './MyMessage.module.css'

type MyMessagePropsType = {
    id?: string
    message?: string
    avatar?: string
    time?: string
}

const MyMessage: React.FC<MyMessagePropsType> = ({
                                                       id,
                                                       message,
                                                       avatar,
                                                     time
                                                   }) => {
    return (
        <li className={s.myMessage__item}>
            <img className={s.myMessage__item__avatar}
                 src="https://avataaars.io/?avatarStyle=Circle&amp;topType=ShortHairShortWaved&amp;accessoriesType=Prescription02&amp;hairColor=Platinum&amp;facialHairType=BeardMajestic&amp;facialHairColor=BrownDark&amp;clotheType=BlazerSweater&amp;eyeType=Happy&amp;eyebrowType=Default&amp;mouthType=Smile&amp;skinColor=Tanned"
                 alt="friend_avatar"/>
            <div className={s.myMessage__message}>
                                <span className={s.myMessage__text}>
                                    {message}
                                </span>
                <span className={s.myMessage__time}>{time}</span>
            </div>
        </li>
    );
};

export default MyMessage;