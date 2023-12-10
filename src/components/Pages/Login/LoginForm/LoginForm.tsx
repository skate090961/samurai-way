import React from "react"
import s from "./LoginForm.module.css"
import { SubmitHandler, useForm } from "react-hook-form"
import { loginTC } from "../../../../store/auth/auth-thunk"
import { useAppDispatch } from "../../../../store/store"
import { useSelector } from "react-redux"
import { selectCaptcha } from "../../../../store/auth/auth-selectors"
import Captcha from "./Captcha/Captcha"

export type LoginFormType = {
  email: string
  password: string
  rememberMe: boolean
  captcha?: string
}

export const LoginForm = () => {
  const captcha = useSelector(selectCaptcha)
  const dispatch = useAppDispatch()
  const defaultValues = {
    email: "",
    password: "",
    rememberMe: false,
    captcha: "",
  }
  const {
    formState,
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<LoginFormType>({
    defaultValues,
    mode: "onBlur",
  })
  const onSubmit: SubmitHandler<LoginFormType> = async (data, event) => {
    await dispatch(loginTC(data, setError))
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          placeholder={"Email"}
          className={errors.email ? s.input + " " + s.error_input : s.input}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Incorrect email",
            },
          })}
        />
        {errors.email && <p className={s.error_message}>{errors.email.message}</p>}
      </div>
      <div>
        <input
          type="password"
          placeholder={"Password"}
          className={errors.password ? s.input + " " + s.error_input : s.input}
          {...register("password", {
            required: "Password is required",
          })}
        />
        {errors.password && <p className={s.error_message}>{errors.password.message}</p>}
        {captcha && <Captcha captcha={captcha} errors={errors} register={register} />}
      </div>
      <div className={s.checkbox_group}>
        <input id="rememberMe" type="checkbox" className={s.checkbox} {...register("rememberMe")} />
        <label htmlFor="rememberMe">Remember me</label>
      </div>
      {errors.root && <div className={s.rootError}>{errors.root?.message}</div>}
      <div>
        <button type="submit" className={s.submit} disabled={!isValid || formState.isSubmitting}>
          Login
        </button>
      </div>
      <div className={s.description}>
        <p>
          To log in get registered
          <a href={"https://social-network.samuraijs.com/"} target={"_blank"}>
            {" "}
            here
          </a>
        </p>
        <p>or use common test account credentials:</p>
        <p className={s.description_data}>Email: free@samuraijs.com</p>
        <p className={s.description_data}>Password: free</p>
      </div>
    </form>
  )
}
