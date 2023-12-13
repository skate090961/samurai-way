import React from "react"
import s from "./ProfileJobInfo.module.css"
import { useSelector } from "react-redux"
import { selectProfile } from "../../../../../store/profile/profile-selectors"

const ProfileJobInfo = () => {
  const profile = useSelector(selectProfile)
  if (!profile) return <></>
  return (
    <div className={s.container}>
      <div className={s.header_about}>Job Info:</div>
      <span>
        <b>Looking for a job:</b>
        <span>{profile.lookingForAJob ? " yes" : " no"}</span>
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

export default ProfileJobInfo
