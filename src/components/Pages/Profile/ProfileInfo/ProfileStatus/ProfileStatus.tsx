import React from "react"
import EditStatus from "./EditStatus/EditStatus"
import { useSelector } from "react-redux"
import { selectStatus } from "../../../../../store/profile/profile-selectors"

type ProfileStatusPropsType = {
  isOwner: boolean
}

const ProfileStatus: React.FC<ProfileStatusPropsType> = ({ isOwner }) => {
  const status = useSelector(selectStatus)
  return <>{isOwner ? <EditStatus status={status} /> : <span>{status}</span>}</>
}

export default ProfileStatus
