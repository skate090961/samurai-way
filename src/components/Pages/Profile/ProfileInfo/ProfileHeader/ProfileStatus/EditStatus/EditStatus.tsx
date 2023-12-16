import React, { ChangeEvent, KeyboardEvent, useState } from "react"
import { CiEdit } from "react-icons/ci"
import { updateStatusTC } from "../../../../../../../store/profile/profile-thunk"
import { useAppDispatch } from "../../../../../../../store/store"
import { TextField } from "@mui/material"
import styles from "./EditStatus.module.css"

const EditStatus = ({ status }: { status: string }) => {
  const dispatch = useAppDispatch()
  const [isEditMode, setIsEditMode] = useState<boolean>(false)
  const [isReadOnly, setIsReadOnly] = useState<boolean>(false)
  const [value, setValue] = useState<string>(status)
  const toggleEditMode = () => setIsEditMode(!isEditMode)
  const changeValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
  const onEnterUpdateStatus = (e: KeyboardEvent<HTMLInputElement>) => {
    return e.key === "Enter" && updateStatus()
  }
  const updateStatus = () => {
    setIsReadOnly(true)
    dispatch(updateStatusTC(value)).finally(() => {
      setIsReadOnly(false)
      toggleEditMode()
    })
  }

  return (
    <div className={styles.status}>
      {isEditMode ? (
        <TextField
          variant="standard"
          className={styles.status_input}
          onBlur={updateStatus}
          value={value}
          onChange={changeValue}
          autoFocus
          disabled={isReadOnly}
          onKeyDown={onEnterUpdateStatus}
        />
      ) : (
        <span onClick={toggleEditMode} className={styles.status_button}>
          {status ? <span>{status}</span> : <span className={styles.tooltip}>add status</span>}
          <CiEdit className={styles.icon} />
        </span>
      )}
    </div>
  )
}

export default React.memo(EditStatus)
