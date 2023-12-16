import AccountBoxIcon from "@mui/icons-material/AccountBox"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import NewspaperIcon from "@mui/icons-material/Newspaper"
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic"
import SettingsIcon from "@mui/icons-material/Settings"
import PersonSearchIcon from "@mui/icons-material/PersonSearch"
import React from "react"

export const tabsData = [
  {
    icon: <AccountBoxIcon />,
    label: "Profile",
    to: "/profile",
  },
  {
    icon: <ChatBubbleIcon />,
    label: "Messages",
    to: "/dialogs",
  },
  // {
  //   icon: <NewspaperIcon />,
  //   label: "News",
  //   to: "/news",
  // },
  // {
  //   icon: <LibraryMusicIcon />,
  //   label: "Music",
  //   to: "/music",
  // },
  {
    icon: <SettingsIcon />,
    label: "Settings",
    to: "/settings",
  },
  {
    icon: <PersonSearchIcon />,
    label: "Find Users",
    to: "/users",
  },
]
