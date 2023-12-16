import React from "react"
import { TailSpinLoader } from "../../../../Loaders/TailSpinLoader/TailSpinLoader"
import styles from "./LoadingMessages.module.css"

export const LoadingMessages = () => {
  return (
    <div className={styles.loader}>
      <TailSpinLoader />
    </div>
  )
}
