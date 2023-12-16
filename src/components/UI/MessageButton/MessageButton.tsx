import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"

const MessageButton = ({ userId }: { userId: string }) => {
  return (
    <Link to={`/dialogs/${userId}`}>
      <Button variant="contained" color="primary" size={"large"}>
        Message
      </Button>
    </Link>
  )
}

export default MessageButton
