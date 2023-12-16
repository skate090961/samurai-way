import React from "react"
import { useSelector } from "react-redux"
import defaultPhoto from "../../../../../../assets/images/user-avatar-default.jpg"
import { EditPhoto } from "./EditPhoto/EditPhoto"
import { selectProfile } from "../../../../../../store/profile/profile-selectors"
import styles from "./ProfilePhoto.module.css"

type ProfilePhotoPropsType = {
  isOwner: boolean
}

export const ProfilePhoto: React.FC<ProfilePhotoPropsType> = ({ isOwner }) => {
  const profile = useSelector(selectProfile)
  if (!profile) return <></>
  const photo = profile.photos.large || defaultPhoto
  return (
    <div>
      <img src={photo} alt="user_photo" className={styles.photo} />
      {isOwner && <EditPhoto />}
    </div>
  )
}
