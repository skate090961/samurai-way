import React, { ChangeEvent, KeyboardEvent, useState } from "react"
import s from "./EditStatus.module.css"
import { CiEdit } from "react-icons/ci"
import { updateStatusTC } from "../../../../../../store/profile/profile-thunk"
import { useAppDispatch } from "../../../../../../store/store"

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
    <div className={s.status}>
      {isEditMode ? (
        <input
          className={s.status_input}
          onBlur={updateStatus}
          value={value}
          onChange={changeValue}
          autoFocus
          readOnly={isReadOnly}
          onKeyDown={onEnterUpdateStatus}
        />
      ) : (
        <span onClick={toggleEditMode} className={s.status_button}>
          {status ? <span>{status}</span> : <span className={s.tooltip}>add status</span>}
          <CiEdit className={s.icon} />
        </span>
      )}
    </div>
  )
}

export default React.memo(EditStatus)
