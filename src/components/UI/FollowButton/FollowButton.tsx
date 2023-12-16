import React from "react"
import { Button } from "@mui/material"

type FollowButtonType = {
  followed: boolean
  callback: () => void
  disabled: boolean
}

const FollowButton: React.FC<FollowButtonType> = ({ followed, callback, disabled }) => {
  const buttonTitle = followed ? "Unfollow" : "Follow"
  const buttonClasses = followed ? `error` : `primary`
  return (
    <Button color={buttonClasses} onClick={callback} disabled={disabled} variant="contained" size={"large"}>
      {buttonTitle}
    </Button>
  )
}

export default FollowButton
