import React from "react"
import s from "./ContactItem.module.css"
import shortenLink from "../../../utils/link/shortenLink"
import { FaFacebook, FaGithub, FaLink, FaTwitter, FaYoutube } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr"
import { CgWebsite } from "react-icons/cg"
import vkLogo from "../../../assets/images/vk_logo.svg"
import { TextField } from "@mui/material"

type ContactItemPropsType = {
  title: string
  value: string
  isOwner: boolean
  register?: any
  errors?: any
}
const IconComponent = () => (
  <div>
    <img src={vkLogo} alt="VK Logo" className={s.vk} />
  </div>
)

const ContactItem: React.FC<ContactItemPropsType> = ({ title, value, isOwner, register, errors }) => {
  const ICONS: { [key: string]: React.ReactNode } = {
    facebook: <FaFacebook className={s.icon} />,
    website: <CgWebsite className={s.icon} />,
    vk: <IconComponent />,
    twitter: <FaTwitter className={s.icon} />,
    instagram: <GrInstagram className={s.icon} />,
    youtube: <FaYoutube className={s.icon} />,
    github: <FaGithub className={s.icon} />,
    mainLink: <FaLink className={s.icon} />,
  }

  return (
    <li className={s.item}>
      <div className={s.icon_container}>{ICONS[title]}</div>
      {isOwner ? (
        <TextField
          error={!!errors?.[title]}
          helperText={errors?.email && errors.email.message}
          id="outlined-basic"
          variant="outlined"
          size={"small"}
          style={{ width: "300px" }}
          {...register(`contacts.${String(title)}`, {
            pattern: {
              value:
                /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g,
              message: "Invalid url format",
            },
          })}
        />
      ) : (
        <a href={value} className={s.contact_link}>
          {value && shortenLink(value)}
        </a>
      )}
      {!value && !isOwner && <span className={s.empty}>empty</span>}
    </li>
  )
}

export default ContactItem
