import React from 'react';
import {changeFollowingStatusAC, UserType} from "../../../../store/reducers/users-reducer/users-reducer";
import s from './User.module.css'
import userPhoto from "../../../../assets/images/user-avatar-default.jpg"
import {useDispatch} from "react-redux";

type UserPropsType = {
    user: UserType
}

const User: React.FC<UserPropsType> = ({
                                           user
                                       }) => {
    const dispatch =useDispatch()
    const {id, photos, followed, status, name} = user
    const {large} = photos

    const changeSubscriptionStatusHandler = () => {
        dispatch(changeFollowingStatusAC(id))
    }
    const buttonTitle = followed ? 'Unfollow' : 'Follow'
    const buttonClasses = `${s.subscribe__button} ${followed ? s.unfollow_color : s.follow_color}`
    const isShowAvatar = large !== null ? large : userPhoto
    return (
        <li className={s.user}>
            <img src={isShowAvatar} alt="user-avatar" className={s.user__avatar}/>
            <div className={s.user__info}>
                <span className={s.user__name}>{name}</span>
                <span className={s.user__location}>{'Russia, Moscow'}</span>
                <span className={s.user__status}>{status}</span>
            </div>
            <div className={s.user__button_container}>
                <button
                    className={buttonClasses}
                    onClick={changeSubscriptionStatusHandler}
                >
                    {buttonTitle}
                </button>
            </div>
        </li>
    );
};

export default User;