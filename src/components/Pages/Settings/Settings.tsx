import React, { useEffect, useState } from "react"
import { withAuthRedirect } from "../../../hoc/withAuthRedirect"
import { useSelector } from "react-redux"
import { selectAuthUserData } from "../../../store/auth/auth-selectors"
import { getUserProfileTC } from "../../../store/profile/profile-thunk"
import { useAppDispatch } from "../../../store/store"
import { selectProfile } from "../../../store/profile/profile-selectors"
import ProfileContacts from "../Profile/ProfileInfo/ProfileContacts/ProfileContacts"

const Settings = () => {
  const authUser = useSelector(selectAuthUserData)
  const profile = useSelector(selectProfile)
  const [isShowJobDescription, setIsShowJobDescription] = useState<boolean>(profile ? profile.lookingForAJob : false)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getUserProfileTC(Number(authUser.id)))
  }, [])
  const changeJobStatusHandler = () => setIsShowJobDescription(!isShowJobDescription)
  return (
    <form>
      <div>
        <label htmlFor="#">Full name:</label>
        <input type="text" value={profile?.fullName} />
      </div>
      <div>
        <label htmlFor="#">About me:</label>
        <input type="text" value={profile?.aboutMe} />
      </div>
      <div>
        <label htmlFor="#">Job Info:</label>
        <input type="checkbox" checked={isShowJobDescription} onChange={changeJobStatusHandler} />
        {isShowJobDescription && <input type="text" value={profile?.lookingForAJobDescription} />}
      </div>
      <div>
        <ProfileContacts isOwner={true} />
      </div>
      <button>Save</button>
    </form>
  )
}

export default withAuthRedirect(Settings)
