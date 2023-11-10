import React, { Component } from 'react';
import {UserType} from "../../../../store/reducers/users-reducer/users-reducer";
import userPhoto from "../../../../assets/images/user-avatar-default.jpg";
import s from './User.module.css'

interface UserItemProps {
    user: UserType
    changeFollowingStatus: (userId: number) => void
}

class User extends Component<UserItemProps> {
    render() {
        const { user, changeFollowingStatus } = this.props

        return (
            <li className={s.user} key={user.id}>
                <img src={user.photos.large !== null ? user.photos.large : userPhoto} alt="user-avatar" className={s.user__avatar} />
                <div className={s.user__info}>
                    <span className={s.user__name}>{user.name}</span>
                    <span className={s.user__location}>{'Russia, Moscow1'}</span>
                    <span className={s.user__status}>{user.status}</span>
                </div>
                <div className={s.user__button_container}>
                    <button className={`${s.subscribe__button} ${user.followed ? s.unfollow_color : s.follow_color}`} onClick={() => changeFollowingStatus(user.id)}>
                        {user.followed ? 'Unfollow' : 'Follow'}
                    </button>
                </div>
            </li>
        );
    }
}

export default User