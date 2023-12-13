import React, { DetailedHTMLProps, InputHTMLAttributes } from "react"
import s from "./SuperInput.module.css"
import { FieldErrors } from "react-hook-form/dist/types/errors"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperInputTextPropsType = DefaultInputPropsType & {
  errors: FieldErrors<any>
  title: string
}
const SuperInput: React.FC<SuperInputTextPropsType> = ({ errors, title, ...restProps }) => {
  return (
    <>
      <input className={errors[title] ? s.input + " " + s.error_input : s.input} {...restProps} />
      {errors[title] && <p className={s.error_message}>{errors[title]?.message}</p>}
    </>
  )
}

export default SuperInput
