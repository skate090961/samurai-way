import React, {useEffect} from 'react'
import s from "./ProfileInfo.module.css"
import {useParams} from "react-router-dom"
import {getUserProfileTC} from "../../../../store/reducers/profile-reducer/profile-reducer"
import {useAppDispatch} from "../../../../store/store"
import {useSelector} from "react-redux"
import {RootStateType} from "../../../../store/reducers/rootReducer"
import {ProfileResponseType} from "../../../../api/profile-api"
import defaultPhoto from '../../../../assets/images/user-avatar-default.jpg'
import FollowButton from "../../../UI/FollowButton/FollowButton"
import MessageButton from "../../../UI/MessageButton/MessageButton"
import ProfileSkeleton from "./ProfileSkeleton/ProfileSkeleton"
import shortenLink from "../../../../utils/link/shortenLink"
import {getAuthUserDataTC} from "../../../../store/reducers/auth-reducer/auth-reducer";
import {changeFollowingStatusTC} from "../../../../store/reducers/users-reducer/users-reducer";
import {UserType} from "../../../../api/users-api";

const ProfileInfo = () => {
    const {userId} = useParams()

    const profile = useSelector<RootStateType, ProfileResponseType | null>(state => state.profilePage.profile)
    const isLoading = useSelector<RootStateType, boolean>(state => state.profilePage.isLoading)
    const followingInProgress = useSelector<RootStateType, number[]>(state => state.usersPage.followingInProgress)
    const users = useSelector<RootStateType, UserType[]>(state => state.usersPage.users)
    const dispatch = useAppDispatch()
    useEffect(() => {
        userId
            ? dispatch(getUserProfileTC(Number(userId)))
            : dispatch(getAuthUserDataTC())
    }, [userId])


    const changeSubscriptionStatus = () => {
        profile && dispatch(changeFollowingStatusTC(profile.userId))
    }

    const findUser = profile && users.find(u => u.id === profile.userId)
    const isFollow = findUser ? findUser.followed : false

    const isFollowButtonDisabled = findUser ? followingInProgress.some(id => id === findUser.id) : true
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
                                <span>Status</span>
                            </div>
                            {userId
                                ?
                                <div className={s.buttons}>
                                    <FollowButton
                                        followed={isFollow}
                                        callback={changeSubscriptionStatus}
                                        disabled={isFollowButtonDisabled}/>
                                    <MessageButton/>
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