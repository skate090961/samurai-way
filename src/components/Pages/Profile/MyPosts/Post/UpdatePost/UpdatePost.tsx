import React, { useState } from "react"
import { EditablePost } from "../../EditablePost/EditablePost"
import { Button } from "@mui/material"
import { useAppDispatch } from "../../../../../../store/store"
import { updatePostTC } from "../../../../../../store/profile/profile-reducer"
import styles from "./UpdatePost.module.css"

type UpdatePostType = {
  postId: string
  postValue: string
  photo: string
  isEditMode: boolean
  showEdit: () => void
}

export const UpdatePost: React.FC<UpdatePostType> = ({ postValue, postId, photo, showEdit, isEditMode }) => {
  const [value, setValue] = useState<string>(postValue)
  const dispatch = useAppDispatch()

  const changePostValueHandler = (value: string) => {
    setValue(value)
  }

  const updatePostHandler = () => {
    dispatch(updatePostTC(postId, value))
    showEdit()
  }
  return (
    <div className={styles.container}>
      <EditablePost
        value={value}
        onChange={changePostValueHandler}
        photo={photo}
        isEditable={isEditMode}
        postValue={postValue}
      />
      {isEditMode && (
        <Button variant="contained" sx={{ width: "120px" }} onClick={updatePostHandler} disabled={!value}>
          Save
        </Button>
      )}
    </div>
  )
}
