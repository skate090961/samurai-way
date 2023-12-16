import React from "react"
import { useForm } from "react-hook-form"
import { updateProfilePhotoTC } from "../../../../../../../store/profile/profile-thunk"
import { useAppDispatch } from "../../../../../../../store/store"
import { IconButton, styled } from "@mui/material"
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined"
import styles from "./EditPhoto.module.css"

export const EditPhoto = () => {
  const dispatch = useAppDispatch()
  const { register, setValue } = useForm<{ photo: File }>()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setValue("photo", file)
      dispatch(updateProfilePhotoTC(file))
    }
  }
  const VisuallyHiddenInput = styled("input")({
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  })
  return (
    <form className={styles.editPhoto}>
      <IconButton component="label" className={styles.button} size={"large"}>
        <div className={styles.icon_container}>
          <AddAPhotoOutlinedIcon className={styles.icon} />
          <VisuallyHiddenInput type="file" {...register("photo")} onChange={handleFileChange} />
        </div>
      </IconButton>
    </form>
  )
}
