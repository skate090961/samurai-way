import React from 'react'
import s from './ProfileCard.module.css'
import profileDropdownStyle from '../ProfileDropdown.module.css'
import defaultPhoto from "../../../../../assets/images/user-avatar-default.jpg";
import {Link, Navigate} from "react-router-dom";
import {IoSettingsOutline} from "react-icons/io5";
import {FaPowerOff} from "react-icons/fa6";
import {AuthMeDataExtendsType} from "../../../../../store/auth/auth-reducer";
import {logoutTC} from "../../../../../store/auth/auth-thunk";
import {useAppDispatch} from "../../../../../store/store";

type ProfileCardPropsType = {
    profile: AuthMeDataExtendsType
    setIsShowCard: (isShowCard: boolean) => void
}

const ProfileCard: React.FC<ProfileCardPropsType> = ({
                                                         profile,
                                                         setIsShowCard
                                                     }) => {
    const dispatch = useAppDispatch()
    const logoutHandler = () => {
        dispatch(logoutTC())
        setIsShowCard(false)
    }
    const viewProfileHandler = () => {
        setIsShowCard(false)
        return <Navigate to={'profile'}/>
    }
    const settingsHandler = () => {
        setIsShowCard(false)
        return <Navigate to={'settings'}/>
    }
    return (
        <div className={s.profile_card}>
            <div className={s.header}>
                <img src={profile.photos?.small ? profile.photos.small : defaultPhoto} alt={'user_photo'}
                     className={profileDropdownStyle.photo}/>
                <div className={s.info}>
                    <span className={s.user_name}>{profile.login}</span>
                    <span className={s.status}>status</span>
                </div>
            </div>
            <div className={s.view_profile_button}>
                <Link to={'/profile'} onClick={viewProfileHandler}>View profile</Link>
            </div>
            <div className={s.button_container}>
                <IoSettingsOutline size={25}/>
                <Link to={'/settings'} onClick={settingsHandler}>Settings</Link>
            </div>
            <div className={s.button_container}>
                <FaPowerOff size={20}/>
                <Link to={'#'} onClick={logoutHandler}>Sign Out</Link>
            </div>
        </div>
    )
}

export default ProfileCard