import React from "react"
import styles from "./ProfileDetails.module.css"
import { Contacts } from "../../../../Contacts/Contacts"
import { ProfileJobInfo } from "./ProfileJobInfo/ProfileJobInfo"
import { ProfileResponseType } from "../../../../../api/profile-api"

export const ProfileDetails = ({ profile }: { profile: ProfileResponseType }) => {
  return (
    <div className={styles.details}>
      <Contacts isOwner={false} />
      <div className={styles.info}>
        <ProfileJobInfo />
        {profile.aboutMe && (
          <div>
            <div className={styles.details_header}>About me:</div>
            {profile.aboutMe}
          </div>
        )}
      </div>
    </div>
  )
}
