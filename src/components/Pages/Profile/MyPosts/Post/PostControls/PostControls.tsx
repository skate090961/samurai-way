import React, { useState } from "react"
import { IconButton } from "@mui/material"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded"
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded"
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded"
import {
  decrementLikeCountAC,
  incrementLikeCountAC,
  removePostAC,
} from "../../../../../../store/profile/profile-reducer"
import { useAppDispatch } from "../../../../../../store/store"
import styles from "./PostControls.module.css"

type PostControlsType = {
  postId: string
  showEditPost: () => void
}

export const PostControls: React.FC<PostControlsType> = ({ postId, showEditPost }) => {
  const [isLike, setIsLike] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const incLikeHandler = () => {
    setIsLike(true)
    dispatch(incrementLikeCountAC(postId))
  }
  const decLikeHandler = () => {
    setIsLike(false)
    dispatch(decrementLikeCountAC(postId))
  }
  const removePostHandler = () => {
    dispatch(removePostAC(postId))
  }
  return (
    <div className={styles.controls}>
      <div>
        <IconButton>
          {!isLike ? (
            <FavoriteBorderIcon className={styles.button_icon} color={"error"} onClick={incLikeHandler} />
          ) : (
            <FavoriteRoundedIcon className={styles.button_icon} color={"error"} onClick={decLikeHandler} />
          )}
        </IconButton>
        <IconButton>
          <BorderColorRoundedIcon className={styles.button_icon} color={"inherit"} onClick={showEditPost} />
        </IconButton>
      </div>
      <IconButton>
        <DeleteRoundedIcon className={styles.button_icon} color={"primary"} onClick={removePostHandler} />
      </IconButton>
    </div>
  )
}
