import React, {ChangeEvent, useState} from 'react'
import s from './ProfileStatus.module.css'
import {CiEdit} from "react-icons/ci"
import {updateStatusTC} from "../../../../../store/profile/profile-thunk";
import {useAppDispatch} from "../../../../../store/store";

const ProfileStatus = ({status}: { status: string }) => {
    const dispatch = useAppDispatch()
    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    const [value, setValue] = useState<string>(status)
    const toggleEditMode = () => setIsEditMode(!isEditMode)
    const changeValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    const updateStatus = () => {
        toggleEditMode()
        dispatch(updateStatusTC(value))
    }
    return (
        <div className={s.status}>
            {isEditMode
                ?
                <input
                    className={s.status_input}
                    onBlur={updateStatus}
                    value={value}
                    onChange={changeValue}
                    autoFocus
                />
                :
                <span
                    onClick={toggleEditMode}
                    className={s.status_button}
                >
                    <span>{status}</span>
                    <CiEdit className={s.icon}/>
                </span>
            }
        </div>

    )
}

export default React.memo(ProfileStatus)