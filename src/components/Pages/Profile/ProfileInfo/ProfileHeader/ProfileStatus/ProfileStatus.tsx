import React from "react"
import EditStatus from "./EditStatus/EditStatus"
import { useSelector } from "react-redux"
import { selectStatus } from "../../../../../../store/profile/profile-selectors"

type ProfileStatusPropsType = {
  isOwner: boolean
}

export const ProfileStatus: React.FC<ProfileStatusPropsType> = ({ isOwner }) => {
  const status = useSelector(selectStatus)
  const isOwnerStatus = isOwner ? <EditStatus status={status} /> : <span>{status}</span>
  return <>{isOwnerStatus}</>
}
