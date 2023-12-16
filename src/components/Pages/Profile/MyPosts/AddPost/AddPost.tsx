import React, { useState } from "react"
import styles from "./AddPost.module.css"
import { EditablePost } from "../EditablePost/EditablePost"
import { Button } from "@mui/material"
import { addPostAC } from "../../../../../store/profile/profile-reducer"
import { useDispatch } from "react-redux"

export const AddPost = ({ photo }: { photo: string }) => {
  const [value, setValue] = useState<string>("")
  const dispatch = useDispatch()
  const addPostHandler = () => {
    dispatch(addPostAC(value))
    setValue("")
  }
  const changePostHandler = (value: string) => {
    setValue(value)
  }
  return (
    <div className={styles.container}>
      <EditablePost value={value} onChange={changePostHandler} photo={photo} isEditable={true} />
      <Button variant="contained" onClick={addPostHandler} sx={{ width: "120px" }} disabled={!value}>
        Add Post
      </Button>
    </div>
  )
}
