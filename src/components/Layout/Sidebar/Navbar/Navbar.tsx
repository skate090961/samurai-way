import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Tab } from "@mui/material"
import Tabs from "@mui/material/Tabs"
import { tabs } from "../../../../constans/tabs"

export const Navbar = () => {
  // const { newMessagesCount } = useSelector(selectAuthUserData)
  const [value, setValue] = useState<number>(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const tabsListRender = tabs.map((tab, index) => (
    <Tab
      key={index}
      icon={tab.icon}
      iconPosition={"start"}
      label={tab.label}
      to={tab.to}
      component={Link}
      sx={{ justifyContent: "flex-start", minHeight: "50px" }}
    />
  ))
  return (
    <Tabs orientation={"vertical"} value={value} onChange={handleChange} sx={{ minHeight: "50px" }}>
      {tabsListRender}
    </Tabs>
  )
}
