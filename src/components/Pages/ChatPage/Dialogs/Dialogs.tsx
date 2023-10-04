import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import {DialogsType} from "../../../../store/store";

type DialogsPropsType = {
    dialogsData: DialogsType[]
}

const Dialogs: React.FC<DialogsPropsType> = ({
                                                 dialogsData
                                             }) => {
    const dialogsList = dialogsData.map(d =>
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