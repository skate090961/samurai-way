import React from "react"
import { TailSpin } from "react-loader-spinner"

export const TailSpinLoader = () => {
  return (
    <TailSpin
      height="80"
      width="80"
      color="#00a3ff"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperClass=""
      visible={true}
    />
  )
}
