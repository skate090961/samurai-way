import React, { memo } from "react"
import s from "./MessageSender.module.css"
import { useAppDispatch } from "../../../../store/store"
import { SubmitHandler, useForm } from "react-hook-form"
import { sendMessageTC } from "../../../../store/message/thunk-message"
import { Button, TextField } from "@mui/material"
import SendIcon from "@mui/icons-material/Send"

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
      <TextField
        size={"small"}
        fullWidth
        id="fullWidth"
        autoFocus
        type={"text"}
        className={s.sender__input}
        placeholder={"Type your message here"}
        disabled={formState.isSubmitting}
        {...register("message", { required: true })}
      />
      <Button type="submit" disabled={!isValid || formState.isSubmitting} variant="contained">
        <SendIcon />
      </Button>
    </form>
  )
}

export default memo(MessageSender)
