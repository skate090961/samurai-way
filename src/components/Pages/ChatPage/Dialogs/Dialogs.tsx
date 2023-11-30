import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import {useSelector} from "react-redux";
import {selectDialogs} from "../../../../store/message/message-selectors";

const Dialogs = () => {
    const dialogs = useSelector(selectDialogs)

    const dialogsList = dialogs.map(d =>
        <Dialog
            id={d.id}
            key={d.id}
            name={d.name}
            avatar={d.avatar}
        />
    )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__header}>
                <img className={s.dialogs__avatar}
                     src="https://avataaars.io/?avatarStyle=Circle&amp;topType=ShortHairShortWaved&amp;accessoriesType=Prescription02&amp;hairColor=Platinum&amp;facialHairType=BeardMajestic&amp;facialHairColor=BrownDark&amp;clotheType=BlazerSweater&amp;eyeType=Happy&amp;eyebrowType=Default&amp;mouthType=Smile&amp;skinColor=Tanned"
                     alt="profile_avatar"/>
                <span className={s.dialogs__header__span}>Chat</span>
            </div>
            <ul className={s.dialogs__list}>
                {dialogsList}
            </ul>
        </div>
    );
};

export default Dialogs;