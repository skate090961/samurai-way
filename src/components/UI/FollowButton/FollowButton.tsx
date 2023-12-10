import React from "react"
import s from "./FollowButton.module.css"

type FollowButtonType = {
  followed: boolean
  callback: () => void
  disabled: boolean
}

const FollowButton: React.FC<FollowButtonType> = ({ followed, callback, disabled }) => {
  const buttonTitle = followed ? "Unfollow" : "Follow"
  const buttonClasses = `${s.subscribe__button} ${followed ? s.unfollow_color : s.follow_color}`
  return (
    <button className={buttonClasses} onClick={callback} disabled={disabled}>
      {buttonTitle}
    </button>
  )
}

export default FollowButton
