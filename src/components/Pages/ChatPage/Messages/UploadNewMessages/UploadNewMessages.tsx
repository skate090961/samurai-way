import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { Button, CircularProgress } from "@mui/material"
import Box from "@mui/material/Box"
import { setCurrentPageAC } from "../../../../../store/message/message-reducer"
import { useAppDispatch } from "../../../../../store/store"
import {
  selectCurrentPage,
  selectMessages,
  selectTotalItemsCount,
} from "../../../../../store/message/message-selectors"
import { getMessagesTC } from "../../../../../store/message/thunk-message"
import styles from "./UploadNewMessages.module.css"

export const UploadNewMessages = () => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const messages = useSelector(selectMessages)
  const totalItemsCount = useSelector(selectTotalItemsCount)
  const currentPage = useSelector(selectCurrentPage)
  const isMaxItemsLength = totalItemsCount <= messages.items.length

  const uploadNewMessagesHandler = () => {
    setIsLoading(true)
    dispatch(setCurrentPageAC(currentPage + 1))
    dispatch(getMessagesTC(Number(id))).finally(() => setIsLoading(false))
  }

  useEffect(() => {
    return () => {
      dispatch(setCurrentPageAC(1))
    }
  }, [id])

  return (
    <div className={styles.container}>
      {!isMaxItemsLength &&
        (isLoading ? (
          <Box>
            <CircularProgress />
          </Box>
        ) : (
          <Button variant={"text"} onClick={uploadNewMessagesHandler} color={"primary"}>
            load more messages
          </Button>
        ))}
    </div>
  )
}
