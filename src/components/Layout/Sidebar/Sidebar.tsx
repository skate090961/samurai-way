import React from "react"
import styles from "./Sidebar.module.css"
import { Navbar } from "./Navbar/Navbar"

export const Sidebar = () => {
  // const isAuth = useSelector(selectIsAuth)
  return (
    <div className={styles.sidebar}>
      <Navbar />
      {/*{isAuth && <Friends />}*/}
    </div>
  )
}
