import React from "react"
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPosts from "./MyPosts/MyPosts"
import { withAuthRedirect } from "../../../hoc/withAuthRedirect"

const Profile = () => {
  return (
    <main className={s.main}>
      <ProfileInfo />
      <MyPosts />
    </main>
  )
}

export default withAuthRedirect(Profile)
