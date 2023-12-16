import React, { useState } from "react"
import { PostControls } from "./PostControls/PostControls"
import { UpdatePost } from "./UpdatePost/UpdatePost"
import { PostInfo } from "./PostInfo/PostInfo"
import styles from "./Post.module.css"
import { PostType } from "../../../../../store/profile/profile-reducer"

type PostPropsType = {
  post: PostType
  photo: string
}

export const Post: React.FC<PostPropsType> = ({ post, photo }) => {
  const { id, text, likesCount, date } = post
  const [isEditMode, setIsEditMode] = useState<boolean>(false)
  const showEditHandler = () => {
    setIsEditMode(!isEditMode)
  }

  return (
    <div className={styles.post}>
      <UpdatePost postId={id} postValue={text} photo={photo} isEditMode={isEditMode} showEdit={showEditHandler} />
      <PostInfo date={date} likesCount={likesCount} />
      <div className={styles.horizontal_line}>
        <PostControls postId={id} showEditPost={showEditHandler} />
      </div>
    </div>
  )
}
