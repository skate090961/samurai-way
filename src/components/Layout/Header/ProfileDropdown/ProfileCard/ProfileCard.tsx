import React from 'react'
import s from './ProfileCard.module.css'
import profileDropdownStyle from '../ProfileDropdown.module.css'
import defaultPhoto from "../../../../../assets/images/user-avatar-default.jpg";
import {Link} from "react-router-dom";
import {IoSettingsOutline} from "react-icons/io5";
import {FaPowerOff} from "react-icons/fa6";
import {AuthMeDataExtendsType} from "../../../../../store/auth/auth-reducer";

type ProfileCardPropsType = {
    profile: AuthMeDataExtendsType
    setIsShowCard: (isShowCard: boolean) => void
}

const ProfileCard: React.FC<ProfileCardPropsType> = ({
                                                         profile,
                                                         setIsShowCard
                                                     }) => {
    const closeCardHandler = () => setIsShowCard(false)

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
                <Link to={'/profile'} onClick={closeCardHandler}>View profile</Link>
            </div>
            <div className={s.button_container}>
                <IoSettingsOutline size={25}/>
                <Link to={'/settings'} onClick={closeCardHandler}>Settings</Link>
            </div>
            <div className={s.button_container}>
                <FaPowerOff size={20}/>
                <Link to={'#'} onClick={closeCardHandler}>Sign Out</Link>
            </div>
        </div>
    )
}

export default ProfileCard