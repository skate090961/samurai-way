import React, { useEffect } from "react"
import s from "./ProfileInfo.module.css"
import { useParams } from "react-router-dom"
import { useAppDispatch } from "../../../../store/store"
import { useSelector } from "react-redux"
import ProfileSkeleton from "./ProfileSkeleton"
import { selectProfileLoading } from "../../../../store/profile/profile-selectors"
import { useGetProfileData } from "./useGetProfileData"
import { setUserProfileAC } from "../../../../store/profile/profile-reducer"
import ProfileActions from "./ProfileActions/ProfileActions"
import ProfileStatus from "./ProfileStatus/ProfileStatus"
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto"
import ProfileContacts from "./ProfileContacts/ProfileContacts"
import ProfileJobInfo from "./ProfileJobInfo/ProfileJobInfo"

const ProfileInfo = () => {
  const { userId } = useParams()
  const isOwner = !userId
  const { profile } = useGetProfileData(userId)
  const dispatch = useAppDispatch()
  useEffect(() => {
    return () => {
      dispatch(setUserProfileAC(null))
    }
  }, [])
  const isLoading = useSelector(selectProfileLoading)

  return (
    <>
      {profile && !isLoading ? (
        <div className={s.profile}>
          <div className={s.profile_header}>
            <ProfilePhoto isOwner={isOwner} />
            <div className={s.profile_container}>
              <div className={s.profile_short_info}>
                <span className={s.user_name}>{profile.fullName}</span>
                <ProfileStatus isOwner={isOwner} />
              </div>
              <ProfileActions isOwner={isOwner} userId={userId} />
            </div>
          </div>
          <div className={s.profile_main}>
            <ProfileContacts />
            <div className={s.user_info}>
              <div className={s.header_about}>About me:</div>
              <ProfileJobInfo />
            </div>
          </div>
        </div>
      ) : (
        <ProfileSkeleton />
      )}
    </>
  )
}

export default ProfileInfo
