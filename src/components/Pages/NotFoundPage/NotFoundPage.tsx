import React from "react"
import notFoundPageImage from "../../../assets/images/404.png"
import s from "./NotFoundPage.module.css"

const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <img src={notFoundPageImage} alt="404" />
    </div>
  )
}

export default NotFoundPage
