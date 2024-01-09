import React from "react"
import styles from "./Logo.module.css"
import logo from "../../../../assets/images/logo.png"

export const Logo = () => {
  return <img src={logo} alt="logo" className={styles.logo} />
}
