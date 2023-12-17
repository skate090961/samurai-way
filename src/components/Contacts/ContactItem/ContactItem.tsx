import React from "react"
import styles from "./ContactItem.module.css"
import shortenLink from "../../../utils/link/shortenLink"
import { FaFacebook, FaGithub, FaLink, FaTwitter, FaYoutube } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr"
import { CgWebsite } from "react-icons/cg"
import vkLogo from "../../../assets/images/vk_logo.svg"

type ContactItemPropsType = {
  title: string
  value: string
}
const IconComponent = () => (
  <div>
    <img src={vkLogo} alt="VK Logo" className={styles.vk} />
  </div>
)

const ContactItem: React.FC<ContactItemPropsType> = ({ title, value }) => {
  const contactIcons: { [key: string]: React.ReactNode } = {
    facebook: <FaFacebook className={styles.icon} />,
    website: <CgWebsite className={styles.icon} />,
    vk: <IconComponent />,
    twitter: <FaTwitter className={styles.icon} />,
    instagram: <GrInstagram className={styles.icon} />,
    youtube: <FaYoutube className={styles.icon} />,
    github: <FaGithub className={styles.icon} />,
    mainLink: <FaLink className={styles.icon} />,
  }

  return (
    <li className={styles.item}>
      <div className={styles.icon_container}>{contactIcons[title]}</div>
      <a href={value} className={styles.contact_link}>
        {value && shortenLink(value)}
      </a>
      {!value && <span className={styles.empty}>empty</span>}
    </li>
  )
}

export default ContactItem
