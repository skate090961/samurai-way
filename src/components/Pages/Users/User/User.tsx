import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import userPhoto from "../../../../assets/images/user-avatar-default.jpg"
import { UserType } from "../../../../api/users-api"
import FollowButton from "../../../UI/FollowButton/FollowButton"
import { useAppDispatch } from "../../../../store/store"
import { changeFollowingStatusTC } from "../../../../store/users/users-thunks"
import { selectFollowingInProgress } from "../../../../store/users/users-selectors"
import { selectIsAuth } from "../../../../store/auth/auth-selectors"
import { Grid } from "@mui/material"
import style from "./User.module.css"

type UserPropsType = {
  user: UserType
}

const User: React.FC<UserPropsType> = ({ user }) => {
  const isAuth = useSelector(selectIsAuth)
  const followingInProgress = useSelector(selectFollowingInProgress)
  const dispatch = useAppDispatch()
  const { photos, followed, status, name } = user
  const { large } = photos

  const changeSubscriptionStatus = () => {
    dispatch(changeFollowingStatusTC(user.id))
  }
  const isFollowButtonDisabled = followingInProgress.some((id) => id === user.id)
  const isShowAvatar = large !== null ? large : userPhoto
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <li className={style.user}>
        <Link to={`/profile/${user.id}`}>
          <img src={isShowAvatar} alt="user-avatar" className={style.photo} />
        </Link>
        <div className={style.info}>
          <span className={style.name}>{name}</span>
          <span className={style.status}>{status}</span>
        </div>
        <div className={style.button}>
          {isAuth && (
            <FollowButton followed={followed} callback={changeSubscriptionStatus} disabled={isFollowButtonDisabled} />
          )}
        </div>
      </li>
    </Grid>
  )
}

export default User
