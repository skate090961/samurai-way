import React from "react"
import styles from "./PostInfo.module.css"

type PostInfoType = {
  date: string
  likesCount: number
}
export const PostInfo: React.FC<PostInfoType> = ({ likesCount, date }) => {
  return (
    <div className={styles.info}>
      <span>{date}</span>
      <span>Likes: {likesCount}</span>
    </div>
  )
}
