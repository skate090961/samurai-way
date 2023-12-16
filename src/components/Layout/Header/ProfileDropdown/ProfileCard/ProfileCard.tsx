import * as React from "react"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import Divider from "@mui/material/Divider"
import Settings from "@mui/icons-material/Settings"
import Logout from "@mui/icons-material/Logout"
import { AuthMeDataExtendsType } from "../../../../../store/auth/auth-reducer"
import defaultPhoto from "../../../../../assets/images/user-avatar-default.jpg"
import { Link } from "react-router-dom"
import { logoutTC } from "../../../../../store/auth/auth-thunk"
import { useAppDispatch } from "../../../../../store/store"
import styles from "./ProfileCard.module.css"

type ProfileCardType = {
  authUser: AuthMeDataExtendsType
  setAnchorEl: (anchorEl: null | HTMLElement) => void
  anchorEl: null | HTMLElement
  open: boolean
}

export const ProfileCard: React.FC<ProfileCardType> = ({ authUser, setAnchorEl, anchorEl, open }) => {
  const handleClose = () => {
    setAnchorEl(null)
  }
  const dispatch = useAppDispatch()
  const logoutHandler = () => {
    dispatch(logoutTC())
  }

  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem onClick={handleClose}>
        <Link to={"/profile"} className={styles.link}>
          <img src={authUser.photos?.small || defaultPhoto} alt="user_photo" className={styles.photo} />
          My profile
        </Link>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleClose}>
        <Link to={"/settings"} className={styles.link}>
          <ListItemIcon>
            <Settings fontSize="medium" />
          </ListItemIcon>
          Settings
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to={"#"} onClick={logoutHandler} className={styles.link}>
          <ListItemIcon>
            <Logout fontSize="medium" />
          </ListItemIcon>
          Logout
        </Link>
      </MenuItem>
    </Menu>
  )
}
