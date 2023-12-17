import { useEffect, useState } from "react"
import { useAppDispatch } from "../../../store/store"
import { useSelector } from "react-redux"
import { selectAuthUserData } from "../../../store/auth/auth-selectors"
import { getUserProfileTC } from "../../../store/profile/profile-thunk"
import { selectProfile } from "../../../store/profile/profile-selectors"

export const useGetSettingsProfile = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const profile = useSelector(selectProfile)
  const authUser = useSelector(selectAuthUserData)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getUserProfileTC(Number(authUser.id))).then(() => setIsLoading(false))
  }, [])
  return { profile, isLoading }
}
