import React, { useEffect, useState } from "react"
import { withAuthRedirect } from "../../../hoc/withAuthRedirect"
import { useSelector } from "react-redux"
import { selectAuthUserData } from "../../../store/auth/auth-selectors"
import { getUserProfileTC, UpdateProfileModelDataType, updateSettingsTC } from "../../../store/profile/profile-thunk"
import { useAppDispatch } from "../../../store/store"
import { selectProfile } from "../../../store/profile/profile-selectors"
import { Contacts } from "../../Contacts/Contacts"
import styles from "./Settings.module.css"
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material"
import { SubmitHandler, useForm } from "react-hook-form"
import { ModelProfileType } from "../../../api/profile-api"
import { GlobalDone } from "../../../app/GlobalDone/GlobalDone"

const Settings = () => {
  const authUser = useSelector(selectAuthUserData)
  const profile = useSelector(selectProfile)
  const [isShowJobDescription, setIsShowJobDescription] = useState<boolean>(profile ? profile.lookingForAJob : false)
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(false)
  const [isShow, setIsShow] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getUserProfileTC(Number(authUser.id)))
  }, [])
  const changeJobStatusHandler = () => setIsShowJobDescription(!isShowJobDescription)

  const defaultValues = {
    aboutMe: profile?.aboutMe,
    lookingForAJob: profile?.lookingForAJob,
    lookingForAJobDescription: profile?.lookingForAJobDescription,
    fullName: profile?.fullName,
    contacts: profile?.contacts,
  }
  const {
    formState,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ModelProfileType>({
    defaultValues,
    mode: "onBlur",
  })
  const onSubmit: SubmitHandler<UpdateProfileModelDataType> = async (data, event) => {
    console.log(data)
    setIsSubmitDisabled(true)
    await dispatch(updateSettingsTC(data))
    setIsSubmitDisabled(false)
    setIsShow(true)
  }

  return (
    <form className={styles.settings_form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.block}>
        <label htmlFor="#" className={styles.title}>
          Full name:
        </label>
        <div>
          <TextField
            error={!!errors.fullName}
            helperText={errors.fullName && errors.fullName.message}
            variant="outlined"
            size={"small"}
            style={{ width: "300px" }}
            {...register("fullName", { required: "Full name is required" })}
          />
        </div>
      </div>
      <div className={styles.block}>
        <label htmlFor="#" className={styles.title}>
          About me:
        </label>
        <div>
          <TextField
            error={!!errors.aboutMe}
            helperText={errors.aboutMe && errors.aboutMe.message}
            variant="outlined"
            size={"medium"}
            style={{ width: "300px" }}
            {...register("aboutMe", { required: "About me is required" })}
          />
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.title}>Job info:</div>
        <FormControlLabel
          label={"Looking for a job"}
          control={
            <Checkbox
              {...register("lookingForAJob")}
              checked={isShowJobDescription}
              onChange={changeJobStatusHandler}
            />
          }
        />
        <div>
          {isShowJobDescription && (
            <TextField
              label="My skills"
              variant="outlined"
              size={"medium"}
              style={{ width: "300px" }}
              {...register("lookingForAJobDescription")}
            />
          )}
        </div>
      </div>
      <div>
        <Contacts isOwner={true} register={register} errors={errors} />
      </div>
      <Button variant="contained" type={"submit"} disabled={isSubmitDisabled}>
        Save
      </Button>
      <GlobalDone isShow={isShow} text={"Changes saved"} setIsShow={setIsShow} />
    </form>
  )
}

export default withAuthRedirect(Settings)
