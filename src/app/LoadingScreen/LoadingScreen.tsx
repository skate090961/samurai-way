import React from "react"
import styles from "./LoadingScreen.module.css"
import { TailSpinLoader } from "../../components/Loaders/TailSpinLoader/TailSpinLoader"

export const LoadingScreen = () => {
  return (
    <div className={styles.loading}>
      <TailSpinLoader />
    </div>
  )
}
