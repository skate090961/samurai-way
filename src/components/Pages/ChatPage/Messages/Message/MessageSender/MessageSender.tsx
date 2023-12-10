import React from "react"
import s from "./MessageSender.module.css"

const MessageSender = () => {
  return (
    <div className={s.sender__form}>
      <input className={s.sender__input} placeholder={"Type your message here"} />
      <button className={s.sender__button}>Send</button>
    </div>
  )
}

export default MessageSender
