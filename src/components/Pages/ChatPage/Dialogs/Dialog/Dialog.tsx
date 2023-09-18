import React from 'react';
import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    id: string
    name: string
    message?: string
    avatar: string
}

type IsActiveType = {
    [key: string]: boolean
}

const Dialog: React.FC<DialogsItemPropsType> = ({
                                                    id,
                                                    message,
                                                    avatar,
                                                    name
                                                }) => {
    const setActive = ({isActive}: IsActiveType) => isActive ? `${s.dialog__link} ${s.dialog__link_active}` : s.dialog__link

    return (
        <li className={s.dialog__item}>
            <NavLink className={setActive} to={`${id}`}>
                <img className={s.dialog__avatar}
                     src={avatar}
                     alt="friend_avatar"/>
                <div className={s.dialog__container}>
                    <span className={s.dialog__name}>{name}</span>
                    <span className={s.dialog__message}>You: Hello</span>
                </div>
            </NavLink>
        </li>
    );
};

export default Dialog;