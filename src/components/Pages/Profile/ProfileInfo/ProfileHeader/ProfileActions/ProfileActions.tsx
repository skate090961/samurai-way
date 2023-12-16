import React, { useState } from "react"
import { useSelector } from "react-redux"
import FollowButton from "../../../../../UI/FollowButton/FollowButton"
import MessageButton from "../../../../../UI/MessageButton/MessageButton"
import { toggleFollowTC } from "../../../../../../store/users/users-thunks"
import { useAppDispatch } from "../../../../../../store/store"
import { selectIsFollow, selectProfile } from "../../../../../../store/profile/profile-selectors"
import styles from "./ProfileActions.module.css"

type ProfileActionsPropsType = {
  isOwner: boolean
  userId: string | undefined
}

export const ProfileActions: React.FC<ProfileActionsPropsType> = ({ isOwner, userId }) => {
  const dispatch = useAppDispatch()
  const profile = useSelector(selectProfile)
  const isFollow = useSelector(selectIsFollow)
  const [isFollowDisable, setIsFollowDisable] = useState<boolean>(false)
  const changeSubscriptionStatus = () => {
    setIsFollowDisable(true)
    profile && dispatch(toggleFollowTC(profile.userId)).finally(() => setIsFollowDisable(false))
  }

  return (
    <>
      {isOwner || !userId ? null : (
        <div className={styles.buttons}>
          <FollowButton followed={isFollow} callback={changeSubscriptionStatus} disabled={isFollowDisable} />
          <MessageButton userId={userId} />
        </div>
      )}
    </>
  )
}
