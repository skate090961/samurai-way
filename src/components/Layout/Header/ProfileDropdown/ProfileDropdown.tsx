import React, { useState } from "react"
import defaultPhoto from "../../../../assets/images/user-avatar-default.jpg"
import s from "./ProfileDropdown.module.css"
import { useSelector } from "react-redux"
import { RootStateType } from "../../../../store/rootReducer"
import { AuthMeDataExtendsType } from "../../../../store/auth/auth-reducer"
import ProfileCard from "./ProfileCard/ProfileCard"

const ProfileDropdown = () => {
  const authUser = useSelector<RootStateType, AuthMeDataExtendsType>((state) => state.auth.authUserData)
  const [isShowCard, setIsShowCard] = useState<boolean>(false)
  const openCardHandler = () => setIsShowCard(!isShowCard)

  return (
    <div className={s.profile_dropdown}>
      <button onClick={openCardHandler}>
        <img
          src={authUser.photos?.small ? authUser.photos.small : defaultPhoto}
          alt={"user_photo"}
          className={s.photo}
        />
      </button>
      {isShowCard && <ProfileCard profile={authUser} setIsShowCard={setIsShowCard} />}
    </div>
  )
}

export default ProfileDropdown
