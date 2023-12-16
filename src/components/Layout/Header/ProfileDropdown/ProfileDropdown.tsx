import React, { useState } from "react"
import { useSelector } from "react-redux"
import { ProfileCard } from "./ProfileCard/ProfileCard"
import { selectAuthUserData } from "../../../../store/auth/auth-selectors"
import Tooltip from "@mui/material/Tooltip"
import IconButton from "@mui/material/IconButton"
import Avatar from "@mui/material/Avatar"
import defaultPhoto from "../../../../assets/images/user-avatar-default.jpg"
import Box from "@mui/material/Box"
import styles from "./ProfileDropdown.module.css"

export const ProfileDropdown = () => {
  const authUser = useSelector(selectAuthUserData)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  return (
    <>
      <Box className={styles.dropdown}>
        <Tooltip title="Account menu">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar className={styles.avatar}>
              <img src={authUser.photos?.small || defaultPhoto} alt="user_photo" />
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <ProfileCard authUser={authUser} setAnchorEl={setAnchorEl} anchorEl={anchorEl} open={open} />
    </>
  )
}
