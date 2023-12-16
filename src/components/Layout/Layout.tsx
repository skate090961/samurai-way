import React, { ReactNode } from "react"
import { useSelector } from "react-redux"
import { Header } from "./Header/Header"
import { Sidebar } from "./Sidebar/Sidebar"
import { LinearLoader } from "../Loaders/LinearLoader/LinearLoader"
import { selectAppStatus } from "../../store/app/app-selectors"
import styles from "./Layout.module.css"

export const Layout = ({ children }: { children: ReactNode }) => {
  const status = useSelector(selectAppStatus)
  const isAppLoading = status === "loading" && <LinearLoader />
  return (
    <div className={styles.layout}>
      {isAppLoading}
      <Header />
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </div>
  )
}
