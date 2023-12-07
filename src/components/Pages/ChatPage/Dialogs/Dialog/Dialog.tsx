import React from 'react';
import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../../../api/dialogs-api";
import defaultAvatar from '../../../../../assets/images/user-avatar-default.jpg'
import {useSelector} from "react-redux";
import {selectMessages} from "../../../../../store/message/message-selectors";

type DialogsItemPropsType = {
    dialog: DialogType
}

type IsActiveType = {
    [key: string]: boolean
}

const Dialog: React.FC<DialogsItemPropsType> = ({
                                                    dialog
                                                }) => {
    const {id, photos, userName} = dialog
    const setActive = ({isActive}: IsActiveType) => isActive
        ? `${s.dialog__link} ${s.dialog__link_active}`
        : s.dialog__link

    return (
        <li className={s.dialog__item}>
            <NavLink className={setActive} to={`/dialogs/${id}`}>
                <img className={s.dialog__avatar}
                     src={photos.small || defaultAvatar}
                     alt="friend_avatar"/>
                <div className={s.dialog__container}>
                    <span className={s.dialog__name}>{userName}</span>
                    <span className={s.dialog__message}>HELLO!</span>
                </div>
            </NavLink>
        </li>
    )
}

export default Dialog