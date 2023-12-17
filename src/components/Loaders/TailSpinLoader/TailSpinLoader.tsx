import React from "react"
import { TailSpin } from "react-loader-spinner"
import Box from "@mui/material/Box"

export const TailSpinLoader = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
      <TailSpin
        height="80"
        width="80"
        color="#1976d2"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperClass=""
        visible={true}
      />
    </Box>
  )
}
