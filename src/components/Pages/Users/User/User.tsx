import React from 'react'
import {changeFollowingStatusTC} from "../../../../store/reducers/users-reducer/users-reducer"
import s from './User.module.css'
import userPhoto from "../../../../assets/images/user-avatar-default.jpg"
import {UserType} from "../../../../api/users-api"
import {Link} from "react-router-dom"
import FollowButton from "../../../UI/FollowButton/FollowButton"
import {useAppDispatch} from "../../../../store/store";
import {useSelector} from "react-redux";
import {RootStateType} from "../../../../store/reducers/rootReducer";

type UserPropsType = {
    user: UserType
}

const User: React.FC<UserPropsType> = ({
                                           user
                                       }) => {
    const followingInProgress = useSelector<RootStateType, number[]>(state => state.usersPage.followingInProgress)
    const dispatch = useAppDispatch()
    const {photos, followed, status, name} = user
    const {large} = photos

    const changeSubscriptionStatus = () => {
        dispatch(changeFollowingStatusTC(user.id))
    }
    const isFollowButtonDisabled = followingInProgress.some(id => id === user.id)
    const isShowAvatar = large !== null ? large : userPhoto
    return (
        <li className={s.user}>
            <Link to={`/profile/${user.id}`}>
                <img src={isShowAvatar} alt="user-avatar" className={s.user__avatar}/>
            </Link>
            <div className={s.user__info}>
                <span className={s.user__name}>{name}</span>
                <span className={s.user__status}>{status}</span>
            </div>
            <div className={s.user__button_container}>
                <FollowButton
                    followed={followed}
                    callback={changeSubscriptionStatus}
                    disabled={isFollowButtonDisabled}
                />
            </div>
        </li>
    )
}

export default User