import React from "react"
import { useSelector } from "react-redux"
import { Post } from "./Post/Post"
import { selectPosts } from "../../../../store/profile/profile-selectors"
import defaultPhoto from "../../../../assets/images/user-avatar-default.jpg"
import { selectAuthUserData } from "../../../../store/auth/auth-selectors"
import { AddPost } from "./AddPost/AddPost"
import styles from "./MyPosts.module.css"

export const MyPosts = () => {
  const authUser = useSelector(selectAuthUserData)
  const posts = useSelector(selectPosts)
  const photo = authUser.photos?.small || defaultPhoto
  const postsList = posts.map((post) => <Post key={post.id} post={post} photo={photo} />)
  return (
    <div className={styles.posts}>
      <div className={styles.post}>
        <AddPost photo={photo} />
      </div>
      {postsList}
    </div>
  )
}
