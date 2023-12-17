import React, { useEffect, useState } from "react"
import { withAuthRedirect } from "../../../hoc/withAuthRedirect"
import { UpdateProfileModelDataType, updateSettingsTC } from "../../../store/profile/profile-thunk"
import { useAppDispatch } from "../../../store/store"
import styles from "./Settings.module.css"
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material"
import { SubmitHandler, useForm } from "react-hook-form"
import { ContactsType, ModelProfileType } from "../../../api/profile-api"
import { GlobalDone } from "../../../app/GlobalDone/GlobalDone"
import { TailSpinLoader } from "../../Loaders/TailSpinLoader/TailSpinLoader"
import { useGetSettingsProfile } from "./useGetSettingsProfile"

const Settings = () => {
  const { profile, isLoading } = useGetSettingsProfile()

  const [isShowJobDescription, setIsShowJobDescription] = useState<boolean>(profile ? profile.lookingForAJob : false)
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(false)
  const [isShowStatusDone, setIsShowStatusDone] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (profile) {
      Object.entries(profile).forEach(([key, value]) => {
        const typedKey = key as keyof ModelProfileType
        const typedValue = value as string | boolean | ContactsType
        setValue(typedKey, typedValue)
      })
    }
  }, [profile])
  const changeJobStatusHandler = () => setIsShowJobDescription(!isShowJobDescription)

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ModelProfileType>({
    mode: "onBlur",
  })
  const onSubmit: SubmitHandler<UpdateProfileModelDataType> = async (data, event) => {
    console.log(data)
    setIsSubmitDisabled(true)
    await dispatch(updateSettingsTC(data))
    setIsSubmitDisabled(false)
    setIsShowStatusDone(true)
  }
  if (isLoading) return <TailSpinLoader />
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
      <div></div>
      <Button variant="contained" type={"submit"} disabled={isSubmitDisabled}>
        Save
      </Button>
      <GlobalDone isShow={isShowStatusDone} text={"Changes saved"} setIsShow={setIsShowStatusDone} />
    </form>
  )
}

export default withAuthRedirect(Settings)
