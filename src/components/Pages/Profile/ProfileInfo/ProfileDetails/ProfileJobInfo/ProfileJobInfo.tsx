import React from "react"
import styles from "./ProfileJobInfo.module.css"
import { useSelector } from "react-redux"
import { selectProfile } from "../../../../../../store/profile/profile-selectors"

export const ProfileJobInfo = () => {
  const profile = useSelector(selectProfile)
  if (!profile) return <></>
  const isLookingForAJob = profile.lookingForAJob ? " yes" : " no"
  return (
    <div className={styles.container}>
      <div className={styles.header_about}>Job Info:</div>
      <span>
        <b>Looking for a job:</b>
        <span>{isLookingForAJob}</span>
      </span>
      <span>
        {profile.lookingForAJob && (
          <div>
            <b>My professional skills:</b>
            <span> {profile.lookingForAJobDescription}</span>
          </div>
        )}
      </span>
    </div>
  )
}
