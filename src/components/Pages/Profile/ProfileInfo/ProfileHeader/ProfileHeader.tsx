import React from "react"
import styles from "./ProfileHeader.module.css"
import { ProfilePhoto } from "./ProfilePhoto/ProfilePhoto"
import { ProfileStatus } from "./ProfileStatus/ProfileStatus"
import { ProfileActions } from "./ProfileActions/ProfileActions"
import { ProfileResponseType } from "../../../../../api/profile-api"

type ProfileInfoHeaderType = {
  isOwner: boolean
  profile: ProfileResponseType
  userId: string | undefined
}
export const ProfileHeader: React.FC<ProfileInfoHeaderType> = ({ isOwner, profile, userId }) => {
  return (
    <div className={styles.header}>
      <ProfilePhoto isOwner={isOwner} />
      <div className={styles.container}>
        <div className={styles.info}>
          <span className={styles.fullName}>{profile.fullName}</span>
          <ProfileStatus isOwner={isOwner} />
        </div>
        <ProfileActions isOwner={isOwner} userId={userId} />
      </div>
    </div>
  )
}
