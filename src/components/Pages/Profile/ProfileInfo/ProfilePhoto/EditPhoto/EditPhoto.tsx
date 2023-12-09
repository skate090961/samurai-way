import React from 'react'
import {useForm} from "react-hook-form"
import {updateProfilePhotoTC} from "../../../../../../store/profile/profile-thunk"
import {useAppDispatch} from "../../../../../../store/store"
import s from './EditPhoto.module.css'
import {MdOutlineAddAPhoto} from "react-icons/md";

export const EditPhoto = () => {
    const dispatch = useAppDispatch()
    const {register, setValue} = useForm<{ photo: File }>()

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            setValue('photo', file)
            dispatch(updateProfilePhotoTC(file))
        }
    }

    return (
            <form className={s.photoWrapper}>
                <input
                    type="file"
                    id="photo-input"
                    {...register('photo')}
                    onChange={handleFileChange}
                    className={s.photoUpload}
                />
                <label htmlFor="photo-input" className={s.iconWrapper}>
                    <MdOutlineAddAPhoto className={s.icon}/>
                </label>
            </form>
    )
}