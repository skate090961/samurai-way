import React, { ChangeEvent } from "react"
import { TextareaAutosize } from "@mui/material"
import styles from "./EditablePost.module.css"

type ProfileFormType = {
  onChange: (value: string) => void
  value: string
  photo: string
  isEditable: boolean
  postValue?: string
}

export const EditablePost: React.FC<ProfileFormType> = ({ onChange, photo, value, isEditable, postValue }) => {
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.currentTarget.value)
  }
  return (
    <div className={styles.form}>
      <img className={styles.photo} src={photo} alt="profile_avatar" />
      {isEditable ? (
        <>
          <TextareaAutosize
            className={styles.textarea}
            placeholder={"Write something..."}
            value={value}
            onChange={onChangeHandler}
            minRows={2}
          />
        </>
      ) : (
        <div>{postValue}</div>
      )}
    </div>
  )
}
