import React from "react"
import { ProfileResponseType } from "../../../../api/profile-api"
import styles from "./ProfileInfo.module.css"
import { ProfileHeader } from "./ProfileHeader/ProfileHeader"
import { ProfileDetails } from "./ProfileDetails/ProfileDetails"

type ProfileInfoType = {
  isOwner: boolean
  profile: ProfileResponseType
  userId: string | undefined
}

export const ProfileInfo: React.FC<ProfileInfoType> = ({ isOwner, profile, userId }) => {
  return (
    <section className={styles.profile}>
      <ProfileHeader isOwner={isOwner} profile={profile} userId={userId} />
      <ProfileDetails profile={profile} />
    </section>
  )
}
