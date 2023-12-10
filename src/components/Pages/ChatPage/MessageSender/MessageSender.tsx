import React, { memo } from "react"
import s from "./MessageSender.module.css"
import { useAppDispatch } from "../../../../store/store"
import { SubmitHandler, useForm } from "react-hook-form"
import { sendMessageTC } from "../../../../store/message/thunk-message"

const MessageSender = ({ senderId }: { senderId: string | undefined }) => {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState,
    reset,
    formState: { errors, isValid },
  } = useForm<{ message: string }>({
    mode: "onBlur",
  })

  const onSubmit: SubmitHandler<{ message: string }> = (data) =>
    dispatch(sendMessageTC(Number(senderId), data.message)).then(() => reset())
  return (
    <form className={s.sender__form} onSubmit={handleSubmit(onSubmit)}>
      <input
        autoFocus
        type={"text"}
        className={s.sender__input}
        placeholder={"Type your message here"}
        disabled={formState.isSubmitting}
        {...register("message", { required: true })}
      />
      <button type="submit" className={s.sender__button} disabled={!isValid || formState.isSubmitting}>
        Send
      </button>
    </form>
  )
}

export default memo(MessageSender)
