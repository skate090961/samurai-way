import React from "react"
import { Link } from "react-router-dom"
import styles from "./SignInButton.module.css"
import { Button } from "@mui/material"

export const SignInButton = () => {
  return (
    <Button variant="outlined">
      <Link to={"login"} className={styles.link}>
        Sign In
      </Link>
    </Button>
  )
}
