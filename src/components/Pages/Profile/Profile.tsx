import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"
import { MyPosts } from "./MyPosts/MyPosts"
import { withAuthRedirect } from "../../../hoc/withAuthRedirect"
import { useGetProfileData } from "./ProfileInfo/useGetProfileData"
import { useAppDispatch } from "../../../store/store"
import { setUserProfileAC } from "../../../store/profile/profile-reducer"
import { selectProfileLoading } from "../../../store/profile/profile-selectors"
import ProfileSkeleton from "./ProfileInfo/ProfileSkeleton"
import styles from "./Profile.module.css"

const Profile = () => {
  const { userId } = useParams()
  const { profile } = useGetProfileData(userId)
  const dispatch = useAppDispatch()
  useEffect(() => {
    return () => {
      dispatch(setUserProfileAC(null))
    }
  }, [])
  const isOwner = !userId
  const isLoading = useSelector(selectProfileLoading)
  const isShowProfile =
    profile && !isLoading ? <ProfileInfo isOwner={isOwner} profile={profile} userId={userId} /> : <ProfileSkeleton />
  return (
    <main className={styles.main}>
      {isShowProfile}
      <MyPosts />
    </main>
  )
}

export default withAuthRedirect(Profile)
