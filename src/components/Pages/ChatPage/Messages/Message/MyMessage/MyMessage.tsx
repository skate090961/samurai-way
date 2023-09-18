import React from 'react';
import s from './MyMessage.module.css'

type MyMessagePropsType = {
    id?: string
    message?: string
    avatar?: string
}

const MyMessage: React.FC<MyMessagePropsType> = ({
                                                       id,
                                                       message,
                                                       avatar
                                                   }) => {
    return (
        <li className={s.myMessage__item}>
            <img className={s.myMessage__item__avatar}
                 src="https://avataaars.io/?avatarStyle=Circle&amp;topType=ShortHairShortWaved&amp;accessoriesType=Prescription02&amp;hairColor=Platinum&amp;facialHairType=BeardMajestic&amp;facialHairColor=BrownDark&amp;clotheType=BlazerSweater&amp;eyeType=Happy&amp;eyebrowType=Default&amp;mouthType=Smile&amp;skinColor=Tanned"
                 alt="friend_avatar"/>
            <div className={s.myMessage__message}>
                                <span className={s.myMessage__text}>
                                    Hello! Have you seen my backpack anywhere in office?
                                </span>
                <span className={s.myMessage__time}>10:42</span>
            </div>
        </li>
    );
};

export default MyMessage;