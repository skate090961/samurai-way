import React from "react"
import s from "./NewMessagesCount.module.css"

const NewMessagesCount = ({ newMessagesCount }: { newMessagesCount: number }) => {
  return <div className={s.container}>{newMessagesCount}</div>
}

export default NewMessagesCount
