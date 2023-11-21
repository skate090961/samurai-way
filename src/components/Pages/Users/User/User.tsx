import React from 'react'
import {changeFollowingStatusAC} from "../../../../store/reducers/users-reducer/users-reducer"
import s from './User.module.css'
import userPhoto from "../../../../assets/images/user-avatar-default.jpg"
import {useDispatch} from "react-redux"
import {UserType} from "../../../../api/users-api"
import {Link} from "react-router-dom";
import FollowButton from "../../../UI/FollowButton/FollowButton";

type UserPropsType = {
    user: UserType
}

const User: React.FC<UserPropsType> = ({
                                           user
                                       }) => {
    const dispatch = useDispatch()
    const {id, photos, followed, status, name} = user
    const {large} = photos

    const changeSubscriptionStatus = () => {
        dispatch(changeFollowingStatusAC(id))
    }
    const isShowAvatar = large !== null ? large : userPhoto
    return (
        <li className={s.user}>
            <Link to={`/profile/${id}`}>
                <img src={isShowAvatar} alt="user-avatar" className={s.user__avatar}/>
            </Link>
            <div className={s.user__info}>
                <span className={s.user__name}>{name}</span>
                <span className={s.user__status}>{status}</span>
            </div>
            <div className={s.user__button_container}>
                <FollowButton followed={user.followed} callback={changeSubscriptionStatus} />
            </div>
        </li>
    )
}

export default User