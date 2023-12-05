import React, {useEffect, useState} from 'react'
import s from "./ProfileInfo.module.css"
import {useParams} from "react-router-dom"
import {useAppDispatch} from "../../../../store/store"
import {useSelector} from "react-redux"
import defaultPhoto from '../../../../assets/images/user-avatar-default.jpg'
import FollowButton from "../../../UI/FollowButton/FollowButton"
import MessageButton from "../../../UI/MessageButton/MessageButton"
import ProfileSkeleton from "./ProfileSkeleton"
import shortenLink from "../../../../utils/link/shortenLink"
import {selectProfileLoading} from "../../../../store/profile/profile-selectors";
import {toggleFollowTC} from "../../../../store/users/users-thunks";
import {useFetchProfile} from "./useFetchProfile";
import {setUserProfileAC} from "../../../../store/profile/profile-reducer";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = () => {
    const [isFollowDisable, setIsFollowDisable] = useState<boolean>(false)
    const {userId} = useParams()
    const {profile, status, isFollow} = useFetchProfile(userId)
    const dispatch = useAppDispatch()
    useEffect(() => {
        return () => {
            dispatch(setUserProfileAC(null))
        }
    }, [])
    const isLoading = useSelector(selectProfileLoading)
    const changeSubscriptionStatus = () => {
        setIsFollowDisable(true)
        profile && dispatch(toggleFollowTC(profile.userId))
            .finally(() => setIsFollowDisable(false))
    }
    const contactsListRender = profile && Object.entries(profile.contacts).map(([key, value]) => (<li key={key}>
            <span className={s.header}>{key}: </span>
            <a href={value} className={s.contact_link}>{value ? shortenLink(value) :
                <span className={s.empty}>empty</span>}</a>
        </li>)
    )
    return (
        <>
            {profile && !isLoading
                ?
                <div className={s.profile}>
                    <div className={s.profile_header}>
                        <img src={profile.photos.large ? profile.photos.large : defaultPhoto}
                             alt="user_photo"
                             className={s.photo}
                        />
                        <div className={s.profile_container}>
                            <div className={s.profile_short_info}>
                                <span className={s.user_name}>{profile.fullName}</span>
                                {!userId
                                    ?
                                    <ProfileStatus status={status}/>
                                    :
                                    <span>{status}</span>
                                }
                            </div>
                            {userId
                                ?
                                <div className={s.buttons}>
                                    <FollowButton
                                        followed={isFollow}
                                        callback={changeSubscriptionStatus}
                                        disabled={isFollowDisable}/>
                                    <MessageButton userId={userId}/>
                                </div>
                                :
                                null
                            }
                        </div>
                    </div>
                    <div className={s.profile_main}>
                        <ul className={s.contacts}>
                            {contactsListRender}
                        </ul>
                        <div className={s.user_info}>
                            <div className={s.header_about}>About me:</div>
                            <span>Looking for a job:
                                <span className={s.empty}>
                                    {profile.lookingForAJob ? profile.lookingForAJob : ' empty'}
                                </span>
                            </span>
                            <span>Looking for a job description:
                                <span>
                                    {profile.lookingForAJobDescription ? profile.lookingForAJobDescription :
                                        <span className={s.empty}> empty</span>}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                :
                <ProfileSkeleton/>
            }
        </>
    )

}

export default ProfileInfo