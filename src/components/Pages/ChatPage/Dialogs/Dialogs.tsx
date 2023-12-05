import React, {useEffect} from 'react'
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog"
import {useSelector} from "react-redux"
import {selectDialogs} from "../../../../store/message/message-selectors"
import {useAppDispatch} from "../../../../store/store"
import {getDialogsTC} from "../../../../store/message/thunk-message"
import {selectAuthUserData} from "../../../../store/auth/auth-selectors"
import defaultAvatar from '../../../../assets/images/user-avatar-default.jpg'
import {useParams} from "react-router-dom";

const Dialogs = () => {
    const {id} = useParams()
    const dialogs = useSelector(selectDialogs)
    console.log(dialogs)
    const authUser = useSelector(selectAuthUserData)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getDialogsTC())
    }, [])

    const dialogsList = dialogs.map(dialog =>
        <Dialog
            dialog={dialog}
            key={dialog.id}
        />
    )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__header}>
                <img className={s.dialogs__avatar}
                     src={authUser.photos?.small || defaultAvatar}
                     alt="profile_avatar"/>
                <span className={s.dialogs__header__span}>Chat</span>
            </div>
            <ul className={s.dialogs__list}>
                {dialogsList}
            </ul>
        </div>
    )
}

export default Dialogs