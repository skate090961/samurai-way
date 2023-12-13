import React from "react"
import s from "./ContactItem.module.css"
import shortenLink from "../../../../../../utils/link/shortenLink"
import { FaGithub } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaLink } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr"
import { FaTwitter } from "react-icons/fa"
import { CgWebsite } from "react-icons/cg"
import vkLogo from "../../../../../../assets/images/vk_logo.svg"

type ContactItemPropsType = {
  title: string
  value: string
  isOwner: boolean
}
const IconComponent = () => (
  <div>
    <img src={vkLogo} alt="VK Logo" className={s.vk} />
  </div>
)

const ContactItem: React.FC<ContactItemPropsType> = ({ title, value, isOwner }) => {
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
        <input type="text" value={value} />
      ) : (
        <a href={value} className={s.contact_link}>
          {value ? shortenLink(value) : <span className={s.empty}>empty</span>}
        </a>
      )}
    </li>
  )
}

export default ContactItem
