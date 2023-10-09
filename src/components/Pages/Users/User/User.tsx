import React from 'react';
import {UserType} from "../../../../store/reducers/users-reducer/users-reducer";
import s from './User.module.css'

type UserPropsType = {
    user: UserType
    changeSubscriptionStatus: (userId: string) => void
}

const User: React.FC<UserPropsType> = ({
                                           user,
                                           changeSubscriptionStatus,
                                       }) => {
    const {id, avatar, isFollow, status, location, fullName} = user

    const changeSubscriptionStatusHandler = () => {
        changeSubscriptionStatus(id)
    }
    const buttonTitle = isFollow ? 'Unfollow' : 'Follow'
    const buttonClasses = `${s.subscribe__button} ${isFollow ? s.unfollow_color : s.follow_color}`
    return (
        <li className={s.user}>
            <img src={avatar} alt="user-avatar" className={s.user__avatar}/>
            <div className={s.user__info}>
                <span className={s.user__name}>{fullName}</span>
                <span className={s.user__location}>{`${location.country}, ${location.city}`}</span>
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